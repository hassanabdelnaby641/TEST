import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Globe } from 'lucide-react';

const visionItems = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To revolutionize brand-influencer partnerships through authentic connections and measurable results.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Authenticity, transparency, and innovation drive everything we do in the influencer marketing space.',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Our Vision',
    description: 'To become the global standard for meaningful influencer collaborations that drive real business growth.',
    gradient: 'from-purple-500 to-indigo-500'
  }
];

const Vision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {visionItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="group"
        >
          <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative">
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10`}>
                  <item.icon className={`w-8 h-8 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-transparent bg-clip-text bg-gradient-to-br transition-colors duration-300"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}>
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Vision;