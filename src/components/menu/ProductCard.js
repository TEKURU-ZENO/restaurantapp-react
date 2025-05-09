import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import StarRating from './StarRating';
import { formatCurrency } from '../../utils/helpers';
import '../../styles/global.css';

const ProductCard = ({ product, category }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`product-card ${isDarkMode ? 'dark' : ''}`}>
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
        
        {category && (
          <span className="product-category">{category}</span>
        )}
        
        {product.featured && (
          <span className="product-featured">Featured</span>
        )}
        
        {product.isNew && (
          <span className="product-new">New</span>
        )}
        
        {product.isVegetarian && (
          <span className="product-vegetarian" title="Vegetarian">
            <i className="fas fa-leaf"></i>
          </span>
        )}
        
        {product.isSpicy && (
          <span className="product-spicy" title="Spicy">
            <i className="fas fa-pepper-hot"></i>
          </span>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-rating">
          <StarRating rating={product.rating} showNumber={true} />
          <span className="review-count">({product.reviewCount} reviews)</span>
        </div>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-bottom">
          <span className="product-price">{formatCurrency(product.price)}</span>
          
          <button className="order-btn" aria-label={`Order ${product.name}`}>
            <i className="fas fa-plus"></i> Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;