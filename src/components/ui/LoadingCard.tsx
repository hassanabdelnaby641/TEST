import React from 'react';

const LoadingCard = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="animate-pulse">
      <div className="rounded-lg bg-gray-200 h-48 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

export default LoadingCard;