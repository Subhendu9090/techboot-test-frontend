import React, { useState, useEffect } from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
  duration?: number;
  onClose: () => void;
}

export const Alert: React.FC<AlertProps> = ({ 
  message, 
  type,
  duration = 5000,
  onClose
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose(); // Ensure onClose is called after visibility is set to false
  };

  if (!visible) return null;

  const alertColors = {
    success: {
      bg: 'bg-green-500',
      text: 'text-white',
      buttonBg: 'bg-white',
      buttonText: 'text-green-500',
      hoverBg: 'hover:bg-green-50'
    },
    error: {
      bg: 'bg-red-500',
      text: 'text-white',
      buttonBg: 'bg-white',
      buttonText: 'text-red-500',
      hoverBg: 'hover:bg-red-50'
    }
  };

  const { bg, text, buttonBg, buttonText, hoverBg } = alertColors[type];

  return (
    <div 
      className={`
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        z-50 p-6 rounded-lg shadow-xl 
        text-center w-full max-w-md
        ${bg} ${text}
      `}
    >
      <div className="mb-4 font-semibold">{message}</div>
      <button 
        className={`
          px-4 py-2 rounded-md 
          ${buttonBg} ${buttonText} 
          ${hoverBg} transition-colors duration-300
          font-semibold focus:outline-none
          active:scale-95 // Added slight press effect
        `}
        onClick={handleClose}
      >
        {type === 'success' ? 'OK' : 'Try Again'}
      </button>
    </div>
  );
};