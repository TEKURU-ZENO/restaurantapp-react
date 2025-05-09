import React from 'react';
import '../../styles/global.css';

const StarRating = ({ rating, size = 'medium', showNumber = false }) => {

  const roundedRating = Math.round(rating * 2) / 2;
  const stars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    
    return (
      <span key={index} className={`star ${size}`}>
        {roundedRating >= index + 1 ? (
          <i className="fas fa-star"></i>
        ) : roundedRating >= number ? (
          <i className="fas fa-star-half-alt"></i>
        ) : (
          <i className="far fa-star"></i>
        )}
      </span>
    );
  });
  
  return (
    <div className="star-rating">
      <div className="stars">{stars}</div>
      {showNumber && <span className="rating-number">({rating.toFixed(1)})</span>}
    </div>
  );
};

export default StarRating;