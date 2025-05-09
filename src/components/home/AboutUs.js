import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { revealOnScroll } from '../../utils/scrollAnimation';
import '../../styles/global.css';

const AboutUs = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const cleanup = revealOnScroll();
    return cleanup;
  }, []);
  
  return (
    <section id="about-us" className={`about-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">Our Story</h2>
          <div className="divider"></div>
          <p className="section-subtitle">Passion for culinary excellence since 2010</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="about-image reveal">
            <img 
              src="/assets/images/about-img.jpg" 
              alt="Chef preparing food" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="about-content reveal">
            <h3 className="text-2xl font-semibold mb-4">A Culinary Journey</h3>
            <p className="mb-4">
              Founded by award-winning Chef Michael Savoria in 2010, our restaurant 
              began with a simple mission: to create extraordinary dining experiences 
              that celebrate the richness of seasonal ingredients and culinary traditions.
            </p>
            <p className="mb-4">
              What started as a small bistro has evolved into one of the city's most 
              beloved dining destinations, known for innovative dishes, impeccable service, 
              and a warm, inviting atmosphere.
            </p>
            <p className="mb-6">
              Our team of passionate chefs works directly with local farmers and producers 
              to source the finest ingredients, ensuring that every dish tells a story of 
              quality and craftsmanship.
            </p>
            
            <div className="about-stats grid grid-cols-3 gap-4 text-center">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">32</span>
                <span className="stat-label">Award-Winning Dishes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Star Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;