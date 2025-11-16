import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
        {/* Icon Container */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 mb-6`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Stats */}
        <h3 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {value}
        </h3>
        <p className="text-gray-300 text-lg">{label}</p>

        {/* Hover Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
      </div>
    </motion.div>
  );
};

export default StatCard;