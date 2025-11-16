import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Target } from 'lucide-react';

interface CampaignHeroProps {
  title: string;
  client: string;
  logo?: string;
  image: string;
  metrics: {
    totalViews: string;
    totalEngagement: string;
    clickThroughRate: string;
    roi: string;
  };
}

const CampaignHero: React.FC<CampaignHeroProps> = ({ 
  title, 
  client, 
  logo, 
  image,
  metrics 
}) => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-4xl">
          {logo && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-block bg-white/95 p-4 rounded-xl shadow-lg">
                <img 
                  src={logo} 
                  alt={client}
                  className="h-12 w-auto"
                />
              </div>
            </motion.div>
          )}

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <MetricCard 
              icon={TrendingUp}
              label="Total Views"
              value={metrics.totalViews}
            />
            <MetricCard 
              icon={Users}
              label="Engagement"
              value={metrics.totalEngagement}
            />
            <MetricCard 
              icon={Target}
              label="Click Rate"
              value={metrics.clickThroughRate}
            />
            <MetricCard 
              icon={Award}
              label="ROI"
              value={metrics.roi}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{
  icon: React.FC<any>;
  label: string;
  value: string;
}> = ({ icon: Icon, label, value }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
    <Icon className="w-6 h-6 text-blue-400 mb-2" />
    <div className="text-sm text-gray-300">{label}</div>
    <div className="text-xl font-bold text-white">{value}</div>
  </div>
);

export default CampaignHero;