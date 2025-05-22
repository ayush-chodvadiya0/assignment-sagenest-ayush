'use client';

import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 3, 
  onPageChange,
  className = '' 
}) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderDots = () => (
    <span className="w-2 h-2 mx-1 rounded-full bg-gray-300"></span>
  );

  const renderPageButton = (pageNumber) => {
    const isActive = pageNumber === currentPage;
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`w-2 h-2 mx-1 rounded-full ${
          isActive ? 'bg-green-500' : 'bg-gray-300'
        }`}
        aria-label={`Page ${pageNumber}`}
      ></button>
    );
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(renderPageButton)}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Pagination;