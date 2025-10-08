import React from 'react';

const ChatWindow = ({ user, messages }) => (
  <div className="h-full w-full flex flex-col min-h-0 bg-white">
    
    {/* Header (Consolidated) */}
    <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-10 rounded-t-[2.5rem] md:rounded-t-[3rem]">
      <div className="flex items-center">
        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3 object-cover shadow-sm" />
        <div>
          <h3 className="font-bold text-lg text-gray-800">{user.name}</h3>
          <p className={`text-sm font-medium ${user.color}`}>
              {user.status}
          </p>
        </div>
      </div>
      <div className="flex space-x-4 text-gray-500">
        {renderBoxIcon("bx-phone-call", "24px", "hover:text-black transition cursor-pointer p-1 rounded-full hover:bg-gray-100")}
        {renderBoxIcon("bx-video", "24px", "hover:text-black transition cursor-pointer p-1 rounded-full hover:bg-gray-100")}
        {renderBoxIcon("bx-info-circle", "24px", "hover:text-black transition cursor-pointer p-1 rounded-full hover:bg-gray-100")}
      </div>
    </div>

    {/* Messages Area */}
    <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
      {messages.map(msg => (
        <ChatMessage key={msg.id} message={msg} user={user} />
      ))}
    </div>

    {/* Input (Consolidated) */}
    <div className="flex items-center p-4 border-t border-gray-100 bg-white sticky bottom-0 z-10 rounded-b-[2.5rem] md:rounded-b-[3rem]">
      
      {/* Attachment and Emoji Icons */}
      <div className="flex items-center space-x-3 text-gray-500 mr-3">
        {renderBoxIcon("bx-paperclip", "26px", "hover:text-black transition cursor-pointer")}
        {renderBoxIcon("bx-smile", "26px", "hover:text-black transition cursor-pointer")}
      </div>

      {/* Input Field */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full py-3 pl-4 pr-12 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-black/10 transition text-gray-800 text-sm"
        />
        {/* Send Button */}
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 bg-black rounded-full cursor-pointer shadow-lg hover:bg-gray-800 transition">
          {renderBoxIcon("bx-send", "20px", "text-white transform -rotate-45 -mt-0.5")}
        </div>
      </div>
    </div>
  </div>
);

export default ChatWindow;