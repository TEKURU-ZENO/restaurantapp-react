import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import TestimonialCard from './TestimonialCard';
import { revealOnScroll } from '../../utils/scrollAnimation';
import { testimonialsData } from '../../data/testimonialsData';
import '../../styles/global.css';

const TestimonialCarousel = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  useEffect(() => {
    const cleanup = revealOnScroll();
    return cleanup;
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  
  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };
  
  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonialsData.length
    );
  };
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      goToNextSlide();
    }
    
    if (touchStart - touchEnd < -150) {
      goToPrevSlide();
    }
  };
  
  return (
    <section className={`testimonials-section ${isDarkMode ? 'dark' : ''} reveal`}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="divider"></div>
          <p className="section-subtitle">Read the experiences of our valued customers</p>
        </div>
        
        <div 
          className="testimonial-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-inner">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                  transition: 'transform 0.5s ease'
                }}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isActive={index === activeIndex} 
                />
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-control prev" 
            onClick={goToPrevSlide}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            className="carousel-control next" 
            onClick={goToNextSlide}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          <div className="carousel-indicators">
            {testimonialsData.map((_, index) => (
              <button 
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;