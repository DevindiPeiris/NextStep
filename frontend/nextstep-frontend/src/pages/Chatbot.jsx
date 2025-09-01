import { useState } from "react";
import Navbar from "../components/Navbar";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm here to help you explore your career path. Would you like to see the available career fields?" },
  ]);
  const [input, setInput] = useState("");
  const [stage, setStage] = useState("start"); 
  const [selectedFields, setSelectedFields] = useState([]);
  const [careers, setCareers] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { type: "user", text: userMsg }]);
    setInput("");

    try {
      if (stage === "start") {
        if (userMsg.toLowerCase().includes("yes")) {
          const res = await fetch("http://localhost:8082/api/v1/chatbot/fields");
          const fields = await res.json();
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: `The available fields are: ${fields.join(", ")}.\nPlease choose two fields.` },
          ]);
          setStage("chooseFields");
        } else {
          setMessages((prev) => [...prev, { type: "bot", text: "Okay! Let me know when you’re ready." }]);
        }
      }

      else if (stage === "chooseFields") {
        const chosen = userMsg.split(/,|and/i).map(f => f.trim()).filter(Boolean);
        if (chosen.length === 2) {
          setSelectedFields(chosen);
          setMessages((prev) => [...prev, { type: "bot", text: `Great! Which one do you prefer most? ${chosen.join(" or ")}` }]);
          setStage("choosePreferred");
        } else {
          setMessages((prev) => [...prev, { type: "bot", text: "Please provide exactly two fields separated by 'and' or a comma." }]);
        }
      }

      else if (stage === "choosePreferred") {
        const preferred = userMsg;
        const res = await fetch("http://localhost:8082/api/v1/chatbot/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            field1: selectedFields[0],
            field2: selectedFields[1],
            preferred
          }),
        });
        const recs = await res.json();
        setCareers(recs);
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: `Recommended careers: ${recs.join(", ")}. Which one would you like details about?` },
        ]);
        setStage("details");
      }

      else if (stage === "details") {
        const careerName = userMsg;
        const res = await fetch(
          `http://localhost:8082/api/v1/chatbot/career-details?name=${encodeURIComponent(careerName)}`
        );
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: `**${careerName}**\nSkills: ${data.skills.join(", ")}\nEducation: ${data.education}`,
          },
        ]);
        setStage("end");
      }

    } catch (error) {
      setMessages((prev) => [...prev, { type: "bot", text: "Oops! Something went wrong with the backend." }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Career Guidance Assistant
          </h2>

          
          <div className="h-120 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50 mb-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === "bot" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`px-4 py-2 rounded-2xl max-w-xs whitespace-pre-wrap ${
                    msg.type === "bot" ? "bg-gray-200 text-gray-800" : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          
          <form onSubmit={sendMessage} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
