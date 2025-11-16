import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollButtonProps } from '../types';

export const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"
    style={{ [direction]: '1rem' }}
    aria-label={`Scroll ${direction}`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-5 h-5 text-gray-700" />
    ) : (
      <ChevronRight className="w-5 h-5 text-gray-700" />
    )}
  </button>
);