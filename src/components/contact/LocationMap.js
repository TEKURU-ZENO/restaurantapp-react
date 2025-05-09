import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/global.css';

const LocationMap = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`location-map ${isDarkMode ? 'dark' : ''}`}>
      <div className="map-container">
        <div className="map-placeholder">
          <img 
            src="/api/placeholder/800/400" 
            alt="Restaurant Location Map" 
            className="map-image"
          />
          <div className="map-pin">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>
      </div>
      
      <div className="location-info">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Address</h4>
            <p>123 Gourmet Avenue</p>
            <p>Foodie District, City, 12345</p>
          </div>
        </div>
        
        <div className="info-item">
          <i className="fas fa-phone-alt"></i>
          <div>
            <h4>Phone</h4>
            <p>(123) 456-7890</p>
          </div>
        </div>
        
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h4>Email</h4>
            <p>info@savoria.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;