import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/global.css';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`footer ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description definition */}
          <div className="footer-col">
            <Link to="/" className="footer-logo flex items-center mb-4">
              <img src="/assets/images/logo.png" alt="Restaurant Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold">Savoria</span>
            </Link>
            <p className="mb-4">
              Delighting taste buds with exquisite flavors and memorable dining experiences since 2010.
            </p>
            <div className="social-links flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Contact Info section */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-list">
              <li className="flex items-start mb-3">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Gourmet Avenue, Foodie District, City, 12345</span>
              </li>
              <li className="flex items-center mb-3">
                <i className="fas fa-phone-alt mr-3"></i>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center mb-3">
                <i className="fas fa-envelope mr-3"></i>
                <span>info@savoria.com</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours section */}
          <div className="footer-col">
            <h3 className="footer-heading">Opening Hours</h3>
            <ul className="footer-list">
              <li className="flex justify-between mb-2">
                <span>Monday - Friday:</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Saturday:</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Sunday:</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links in the footer*/}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li className="mb-2">
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className="footer-link">Menu</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Savoria Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;