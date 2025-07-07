import { useState } from "react";
import Navbar from "../components/Navbar";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I'm here to help you explore your career path. 😊" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user's message to chat
    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);

    let botReply = "Sorry, I didn't understand that. Please try again.";

    try {
      if (input.toLowerCase().includes("fields")) {
        // Calls GET /fields
        const res = await fetch("http://localhost:8082/api/v1/chatbot/fields");
        const data = await res.json();
        botReply = `Available fields are: ${data.join(", ")}`;
      } else if (input.toLowerCase().includes("recommend")) {
        // Example POST /recommend with hardcoded fields
        const res = await fetch("http://localhost:8082/api/v1/chatbot/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            field1: "IT",
            field2: "Business & Finance",
            preferred: "IT"
          }),
        });
        const data = await res.json();
        botReply = `Recommended careers: ${data.join(", ")}`;
      } else if (input.toLowerCase().includes("details")) {
        // GET /career-details?name=...
        const career = input.split("details ")[1];
        const res = await fetch(`http://localhost:8082/api/v1/chatbot/career-details?name=${encodeURIComponent(career)}`);
        const data = await res.json();
        botReply = `**${career}**\nSkills: ${data.skills.join(", ")}\nEducation: ${data.education}`;
      }
    } catch (error) {
      botReply = "Oops! Something went wrong with the backend.";
    }

    // Add bot reply
    setMessages((prev) => [...prev, { type: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 mr-25 ml-25">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Career Guidance Assistant
          </h2>

          {/* Chat display area */}
          <div className="h-120 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50 mb-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`px-4 py-2 rounded-2xl max-w-xs ${msg.type === "bot" ? "bg-gray-200 text-gray-800" : "bg-blue-600 text-white"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <form onSubmit={sendMessage} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
