import React, { useState, useEffect } from 'react'

const ErrorPopup = ({popupErr,status}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [popupErr]);

  return (
    <>
      <div 
        className={`error-popup absolute left-1/2 transform -translate-x-1/2 top-2  text-sm backdrop-blur-lg ${status ? 'bg-green-300/20 text-green-500 border border-green-500' : 'bg-red-300/30 text-red-500 border border-red-500'} p-2 rounded mb-4 w-fit transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <p>{popupErr}</p>
      </div>
    </>
  )
}

export default ErrorPopup