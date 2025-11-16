import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

interface CampaignStrategyProps {
  strategy: string;
  objectives: string[];
}

const CampaignStrategy: React.FC<CampaignStrategyProps> = ({ strategy, objectives }) => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Strategy Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Campaign Strategy</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{strategy}</p>
          </motion.div>

          {/* Objectives Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-violet-100 rounded-lg">
                <Target className="w-6 h-6 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Key Objectives</h2>
            </div>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-violet-600 mt-2" />
                  <span className="text-gray-600">{objective}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CampaignStrategy;