import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import useScrollPosition from '../../hooks/useScrollPosition';
import '../../styles/global.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const scrollPosition = useScrollPosition();
  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Menu', path: '/menu' },
    { title: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''} ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="logo flex items-center">
            <img src="/assets/images/logo.png" alt="Restaurant Logo" className="h-12 w-auto" />
            <span className="ml-2 text-xl font-bold">Savoria</span>
          </Link>

          {/* Desktop Navigation Implementation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`nav-link relative ${isActive(link.path)}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-8">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle Implementation */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              className="ml-4 text-2xl focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Code Section */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`block py-2 ${isActive(link.path)}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;