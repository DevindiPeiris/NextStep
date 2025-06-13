// import React, { useState, useEffect, useRef } from 'react';
// import { useChatbot } from '../components/ChatbotContext';

// const Chatbot = () => {
//   const { isChatbotOpen, toggleChatbot } = useChatbot();
//   const [messages, setMessages] = useState([{ text: 'Hello! How can I help you?', isBot: true }]);
//   const [input, setInput] = useState('');
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { text: input, isBot: false };
//     setMessages([...messages, userMessage]);
//     setInput('');

//     try {
//       const response = await fetch('http://localhost:8080/api/chatbot/respond', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: input }),
//       });
//       const data = await response.json();
//       setMessages((prev) => [...prev, { text: data.response, isBot: true }]);
//     } catch (error) {
//       setMessages((prev) => [...prev, { text: 'Error: Could not connect to server', isBot: true }]);
//     }
//   };

//   if (!isChatbotOpen) return null;

//   return (
//     <div className="fixed bottom-16 right-4 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col">
//       <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
//         <h3>Chatbot</h3>
//         <button onClick={toggleChatbot}>✕</button>
//       </div>
//       <div className="flex-1 p-4 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-2 ${msg.isBot ? 'text-left' : 'text-right'}`}
//           >
//             <span
//               className={`inline-block p-2 rounded-lg ${
//                 msg.isBot ? 'bg-gray-200' : 'bg-blue-500 text-white'
//               }`}
//             >
//               {msg.text}
//             </span>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <div className="p-4 border-t">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//           className="w-full p-2 border rounded"
//           placeholder="Type a message..."
//         />
//       </div>
//     </div>
//   );
// };

// export default Chatbot;