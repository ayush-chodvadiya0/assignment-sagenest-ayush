'use client';

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  icon = null,
  ...props
}) => {
  const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none';
  
  const variants = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    outline: 'border border-green-500 text-green-500 hover:bg-green-50',
    text: 'text-green-500 hover:underline',
  };
  
  const sizes = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-3 text-base',
    large: 'px-6 py-4 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      <div className="flex items-center justify-center text-[#ffffff]">
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'outline', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default Button;