import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarouselScroll } from './hooks/useCarouselScroll';

interface ScrollableCarouselProps {
  children: React.ReactNode[];
}

const ScrollableCarousel: React.FC<ScrollableCarouselProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isDragging, setIsDragging, handleMouseDown, handleMouseMove } = useCarouselScroll();

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ 
      left: direction === 'left' ? -scrollAmount : scrollAmount, 
      behavior: 'smooth' 
    });
  }, []);

  return (
    <div className="relative group">
      {/* Left Button */}
      <motion.button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </motion.button>
      
      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => scrollRef.current && handleMouseDown(e, scrollRef.current.offsetLeft, scrollRef.current.scrollLeft)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={(e) => scrollRef.current && handleMouseMove(e, scrollRef.current.offsetLeft, scrollRef.current)}
      >
        <div className="inline-flex gap-6 p-2">
          {React.Children.map(children, (child) => (
            <div 
              className="w-[350px] flex-none"
              style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <motion.button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </motion.button>
    </div>
  );
};

export default ScrollableCarousel;