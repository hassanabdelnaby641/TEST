import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useCarouselScroll } from '../ui/ScrollableCarousel/hooks/useCarouselScroll';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';

const TestimonialList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isDragging, setIsDragging, handleMouseDown, handleMouseMove } = useCarouselScroll();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-indigo-100 rounded-2xl">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their experience working with us
          </p>
        </motion.div>

        {/* Scrollable Container */}
        <div className="relative group">
          {/* Gradient Indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => scrollRef.current && handleMouseDown(e, scrollRef.current.offsetLeft, scrollRef.current.scrollLeft)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseUp={() => setIsDragging(false)}
            onMouseMove={(e) => scrollRef.current && handleMouseMove(e, scrollRef.current.offsetLeft, scrollRef.current)}
          >
            <div className="inline-flex gap-6 px-4 pb-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-[400px] flex-none"
                  style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                >
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-6"
        >
          ← Drag to explore more testimonials →
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialList;