import React from 'react';

const BouncingDotsLoader = () => {
  return (
    <div className="flex justify-center items-center py-10">
      {/* Dot 1 */}
      <div 
        className="w-2.5 h-2.5 mx-1.5 rounded-full bg-blue-500 
                   animate-bounce-dot"
      ></div>
      
      {/* Dot 2 (Delayed by 0.2s) */}
      <div 
        className="w-2.5 h-2.5 mx-1.5 rounded-full bg-blue-500 
                   animate-bounce-dot"
        style={{ animationDelay: '0.2s' }}
      ></div>
      
      {/* Dot 3 (Delayed by 0.4s) */}
      <div 
        className="w-2.5 h-2.5 mx-1.5 rounded-full bg-blue-500 
                   animate-bounce-dot"
        style={{ animationDelay: '0.4s' }}
      ></div>
    </div>
  );
};

export default BouncingDotsLoader;