import React from 'react';

const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className={className}
    >
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 015.9 5.82v4.576a4.278 4.278 0 008.5 0v2.164c2.137 0 3.875-1.739 3.875-3.876V0h4.076v8.684c0 4.394-3.556 7.95-7.95 7.95v-4.573a4.278 4.278 0 01-1.897-.422z"/>
    </svg>
  );
};

export default TikTokIcon;