import React from 'react';

interface GradientProps {
  children: React.ReactNode;
  from?: string;
  to?: string;
  className?: string;
}

const Gradient: React.FC<GradientProps> = ({
  children,
  from = 'from-indigo-600',
  to = 'to-purple-600',
  className = ''
}) => {
  return (
    <span className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default Gradient;