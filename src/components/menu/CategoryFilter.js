import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/global.css';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`category-filter ${isDarkMode ? 'dark' : ''}`}>
      <div className="filter-scroll">
        <button 
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} 
          onClick={() => onCategoryChange('all')}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button 
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;