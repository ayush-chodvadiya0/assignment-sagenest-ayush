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
    <div className={`bg-white rounded-lg shadow-xs ${className}`}>
      {icon && (
        <div className={`flex justify-center ${iconClassName}`}>
          <Image src={icon} alt={title} width={65} height={56} />
        </div>
      )}
      {title && (
        <h3 className={`font-bold text-gray-700 text-center ${titleClassName}`}>
          {title}
        </h3>
      )}
      {description && (
        <p className={`text-gray-600 text-center ${descriptionClassName}`}>
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