import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  className = '',
  dark = false
}) => {
  return (
    <section className={`py-20 ${dark ? 'bg-gray-900 text-white' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h2 className={`text-4xl font-bold mb-4 ${
                dark ? 'text-white' : 'text-gray-900'
              }`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-xl ${
                dark ? 'text-gray-300' : 'text-gray-600'
              } max-w-2xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;