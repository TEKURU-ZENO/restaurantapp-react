import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';
import BusinessHours from '../components/contact/BusinessHours';
import ScrollToTop from '../components/common/ScrollToTop';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Contact = () => {
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Savory Delights | Contact';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="contact-header"
        variants={itemVariants}
      >
        <div className="container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Get in touch with us for reservations, feedback, or inquiries.
          </p>
        </div>
      </motion.div>

      <div className="container">
        <div className="contact-content">
          <motion.div 
            className="contact-form-container"
            variants={itemVariants}
          >
            <ContactForm />
          </motion.div>

          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            <div className="info-card">
              <h3>Find Us</h3>
              <p>123 Gourmet Street</p>
              <p>Culinary District</p>
              <p>Foodville, FD 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@savorydelights.com</p>
            </div>
            
            <div className="social-links">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="TripAdvisor"><i className="fab fa-tripadvisor"></i></a>
              </div>
            </div>
            
            <BusinessHours />
          </motion.div>
        </div>

        <motion.div 
          className="map-container"
          variants={itemVariants}
        >
          <h2>Our Location</h2>
          <LocationMap />
        </motion.div>
      </div>
      
      {scrollPosition > 300 && <ScrollToTop />}
    </motion.div>
  );
};

export default Contact;