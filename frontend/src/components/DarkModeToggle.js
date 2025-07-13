import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center
        w-12 h-6 rounded-full transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
        ${isDarkMode 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
          : 'bg-gradient-to-r from-orange-400 to-yellow-400'
        }
        hover:scale-105 active:scale-95
        ${className}
      `}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Circle */}
      <div
        className={`
          absolute w-5 h-5 rounded-full transition-all duration-300 ease-in-out
          flex items-center justify-center text-xs
          ${isDarkMode 
            ? 'transform translate-x-3 bg-gray-800 text-yellow-300' 
            : 'transform -translate-x-3 bg-white text-orange-500'
          }
          shadow-lg
        `}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </div>
      
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1 text-xs">
        <span className={`transition-opacity duration-300 ${isDarkMode ? 'opacity-30' : 'opacity-70'}`}>
          ☀️
        </span>
        <span className={`transition-opacity duration-300 ${isDarkMode ? 'opacity-70' : 'opacity-30'}`}>
          🌙
        </span>
      </div>
    </button>
  );
};

export default DarkModeToggle;
