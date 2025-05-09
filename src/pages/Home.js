import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import AboutUs from '../components/home/AboutUs';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import FeaturedDishes from '../components/home/FeaturedDishes';
import ScrollToTop from '../components/common/ScrollToTop';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Home = () => {
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Savory Delights | Home';
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
      className="home-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero />
      
      <motion.section variants={itemVariants}>
        <AboutUs />
      </motion.section>
      
      <motion.section 
        variants={itemVariants}
        className="featured-dishes-section"
      >
        <FeaturedDishes />
      </motion.section>
      
      <motion.section 
        variants={itemVariants}
        className="testimonials-section"
      >
        <TestimonialCarousel />
      </motion.section>
      
      {scrollPosition > 300 && <ScrollToTop />}
    </motion.div>
  );
};

export default Home;