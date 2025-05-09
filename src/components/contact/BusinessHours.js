import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/global.css';

const BusinessHours = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const hours = [
    { day: 'Monday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 9:00 PM' }
  ];
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
  return (
    <div className={`business-hours ${isDarkMode ? 'dark' : ''}`}>
      <div className="hours-header">
        <i className="far fa-clock"></i>
        <h3>Opening Hours</h3>
      </div>
      
      <ul className="hours-list">
        {hours.map((item) => (
          <li 
            key={item.day} 
            className={item.day === currentDay ? 'current-day' : ''}
          >
            <span className="day">{item.day}</span>
            <span className="time">{item.hours}</span>
          </li>
        ))}
      </ul>
      
      <div className="special-info">
        <p>
          <i className="fas fa-info-circle"></i>
          <span>Last order 30 minutes before closing</span>
        </p>
        <p>
          <i className="fas fa-utensils"></i>
          <span>Kitchen closes 1 hour before restaurant</span>
        </p>
        <p>
          <i className="fas fa-glass-cheers"></i>
          <span>Happy Hour: Mon-Fri, 3-6 PM</span>
        </p>
      </div>
    </div>
  );
};

export default BusinessHours;