import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden h-full"
      whileHover={{ y: -5 }}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full opacity-50" />
      
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-100 transform rotate-180" />
      
      {/* Content */}
      <div className="relative">
        <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
          "{testimonial.content}"
        </blockquote>
        
        <div className="flex items-center">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-indigo-50">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-indigo-600">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;