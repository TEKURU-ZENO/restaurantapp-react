import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../common/Button';
import ProductCard from '../menu/ProductCard';
import { revealOnScroll } from '../../utils/scrollAnimation';
import { getRandomItems } from '../../utils/helpers';
import { menuData } from '../../data/menuData';
import '../../styles/global.css';

const FeaturedDishes = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const featuredItems = menuData
    .flatMap(category => category.items)
    .filter(item => item.featured)
    .slice(0, 4);
  const displayItems = featuredItems.length >= 4 
    ? featuredItems 
    : [...featuredItems, ...getRandomItems(
        menuData.flatMap(category => category.items).filter(item => !item.featured),
        4 - featuredItems.length
      )];
  
  useEffect(() => {
    const cleanup = revealOnScroll();
    return cleanup;
  }, []);
  
  return (
    <section id="featured-dishes" className={`featured-dishes ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">Featured Dishes</h2>
          <div className="divider"></div>
          <p className="section-subtitle">Our chef's special selections that you must try</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((dish, index) => (
            <div key={dish.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={dish} category={
                menuData.find(cat => 
                  cat.items.some(item => item.id === dish.id)
                )?.name || 'Special'
              } />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button size="large">View Full Menu</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;