import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../common/Button';
import '../../styles/global.css';

const ContactForm = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Reservation',
    message: '',
    date: '',
    time: '',
    guests: 2
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  
  const subjects = [
    'Reservation',
    'Private Event',
    'Feedback',
    'Catering',
    'Other'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.subject === 'Reservation' || formData.subject === 'Private Event') {
      if (!formData.date) {
        newErrors.date = 'Date is required for reservations';
      }
      
      if (!formData.time) {
        newErrors.time = 'Time is required for reservations';
      }
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Reservation',
          message: '',
          date: '',
          time: '',
          guests: 2
        });
      }, 3000);
    }
  };
  
  const isReservationType = formData.subject === 'Reservation' || formData.subject === 'Private Event';
  
  return (
    <div className={`contact-form-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="form-header">
        <h3 className="form-title">Get in Touch</h3>
        <p className="form-subtitle">We'd love to hear from you. Fill out the form below.</p>
      </div>
      
      {isSubmitted ? (
        <div className="success-message">
          <i className="fas fa-check-circle"></i>
          <h4>Thank you for your message!</h4>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Your full name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Your email address"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject*</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
          
          {isReservationType && (
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date*</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={errors.date ? 'error' : ''}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.date && <span className="error-message">{errors.date}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="time">Time*</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={errors.time ? 'error' : ''}
                />
                {errors.time && <span className="error-message">{errors.time}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="guests">Guests</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  max="20"
                />
              </div>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              placeholder="Your message"
              rows="5"
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          
          <div className="form-submit">
            <Button type="primary" size="large" fullWidth={true}>
              {isReservationType ? 'Request Reservation' : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;