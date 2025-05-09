import React from 'react';
import '../../styles/global.css';

const Button = ({ 
  children, 
  type = 'primary', 
  size = 'medium', 
  onClick, 
  className = '',
  disabled = false,
  fullWidth = false
}) => {
  const baseClasses = 'button font-medium transition-all ease-in-out duration-300';
  
  const typeClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
    text: 'bg-transparent text-primary hover:text-primary-dark hover:underline'
  };
  
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-5 text-base',
    large: 'py-3 px-8 text-lg'
  };
  
  const classes = `
    ${baseClasses} 
    ${typeClasses[type]} 
    ${sizeClasses[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
    ${className}
  `;
  
  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;