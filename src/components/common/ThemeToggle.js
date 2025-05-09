import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/global.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className={`toggle-track ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="toggle-thumb"></div>
        <div className="toggle-icon light">☀️</div>
        <div className="toggle-icon dark">🌙</div>
      </div>
    </button>
  );
};

export default ThemeToggle;