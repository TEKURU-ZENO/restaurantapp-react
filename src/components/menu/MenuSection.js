import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ProductCard from './ProductCard';
import { revealOnScroll } from '../../utils/scrollAnimation';
import '../../styles/global.css';

const MenuSection = ({ category, items }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const cleanup = revealOnScroll();
    return cleanup;
  }, []);
  
  if (items.length === 0) {
    return null;
  }
  
  return (
    <section id={`category-${category.id}`} className={`menu-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="menu-section-header">
        <h2 className="menu-section-title">{category.name}</h2>
        {category.description && (
          <p className="menu-section-description">{category.description}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={item.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
            <ProductCard product={item} category={category.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;