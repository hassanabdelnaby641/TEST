import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative">
          {/* Icon */}
          <div className="mb-6">
            <div className="inline-flex p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl">
              <Icon className="w-8 h-8 text-indigo-600" />
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-6">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;