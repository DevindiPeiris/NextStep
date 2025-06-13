import Navbar from "../components/Navbar";

const Chatbot = () => {
  return (
    <div className="min-h-screen bg-gray-100 mr-25 ml-25">
      <Navbar/>

      <div className="flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Career Guidance Assistant
          </h2>

          {/* Chat display area */}
          <div className="h-120 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50 mb-4 space-y-4">
            {/* Bot message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl max-w-xs">
                Hi! I'm here to help you explore your career path. 😊
              </div>
            </div>

            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl max-w-xs">
                What career suits me if I like design?
              </div>
            </div>

            {/* Bot reply */}
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl max-w-xs">
                Great question! You might enjoy fields like graphic design, UI/UX, or product design.
              </div>
            </div>
          </div>

          {/* Input area */}
          <form className="flex gap-2">
            <input
              type="text"
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
