import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import StoryContent from './StoryContent';

const Story = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mb-6">
            <Rocket className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Started</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
              <img 
                src="https://i.imghippo.com/files/XN8414SRc.jpg"
                alt="Saif Eldin, Founder of Adrixa"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-100 rounded-2xl -z-10" />
          </motion.div>

          <StoryContent />
        </div>
      </div>
    </div>
  );
};

export default Story;