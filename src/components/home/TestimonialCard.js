import React from 'react';
import StarRating from '../menu/StarRating';
import '../../styles/global.css';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
      <div className="testimonial-inner">
        <div className="testimonial-image">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="rounded-full"
          />
        </div>
        <div className="testimonial-content">
          <div className="testimonial-rating mb-3">
            <StarRating rating={testimonial.rating} />
          </div>
          <blockquote className="testimonial-quote mb-4">
            "{testimonial.comment}"
          </blockquote>
          <div className="testimonial-author">
            <h4 className="author-name">{testimonial.name}</h4>
            <p className="author-title">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;