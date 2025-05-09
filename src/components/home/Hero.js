import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../common/Button';
import { scrollToElement } from '../../utils/scrollAnimation';
import '../../styles/global.css';

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const handleExploreMenu = () => {
    scrollToElement('featured-dishes', 80);
  };
  
  return (
    <section className={`hero ${isDarkMode ? 'dark' : ''}`}>
      <div className="hero-content container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="hero-title mb-6">
            Experience Culinary Excellence at <span className="text-primary">Savoria</span>
          </h1>
          <p className="hero-subtitle mb-8">
            Indulge in a symphony of flavors crafted with passion using locally sourced, fresh ingredients. 
            Our award-winning chefs create unforgettable dining experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="large" 
              onClick={handleExploreMenu}
            >
              Explore Menu
            </Button>
            <Link to="/contact">
              <Button 
                type="outline" 
                size="large"
              >
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;