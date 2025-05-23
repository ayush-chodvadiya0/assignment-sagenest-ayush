'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Card = ({
  title,
  description,
  icon,
  className = '',
  iconClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-xs p-4 md:p-6 ${className}`}>
      {icon && (
        <div className={`flex justify-center mb-4 md:mb-6 ${iconClassName}`}>
          <Image 
            src={icon} 
            alt={title} 
            width={65} 
            height={56}
            className="w-12 h-12 md:w-[65px] md:h-[56px]"
          />
        </div>
      )}
      {title && (
        <h3 className={`font-bold text-gray-700 text-center text-lg md:text-xl ${titleClassName}`}>
          {title}
        </h3>
      )}
      {description && (
        <p className={`text-gray-600 text-center text-sm md:text-base mt-2 md:mt-4 ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
};

export default Card;