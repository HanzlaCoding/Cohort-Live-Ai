import React, { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { io } from "socket.io-client";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  console.log(message);

  const [messages, setMessages] = useState([
    
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
        sender: "user",
      };
      setMessages([...messages, newMessage]);

      socket.emit("ai-message", message);
      console.log(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    const socket = io("http://localhost:3000");
    setSocket(socket);

    socket.on("ai-response", (response) => {
      const botMessage = {
        id: messages.length + 1,
        text: response,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 via-blue-50 to-teal-100 p-8 font-[Inter]">
      <div className="w-full max-w-3xl h-[600px] bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg?.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="max-w-md">
                <div
                  className={`rounded-2xl px-5 py-3 ${
                    msg.sender === "user"
                      ? "bg-white shadow-lg"
                      : "bg-black text-white shadow-xl"
                  }`}
                >
                  {msg.text}
                </div>
                <p
                  className={`text-xs text-gray-500 mt-1 ${
                    msg.sender === "user" ? "mr-2 text-right" : "ml-2"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-6 bg-white/90 backdrop-blur-sm border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Write a Message..."
              className="flex-1 px-5 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <button
              onClick={handleSend}
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition shadow-lg"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
