import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, TrendingUp } from 'lucide-react';
import { campaigns } from '../../data/campaigns';
import Section from '../layout/Section';
import Gradient from '../ui/Gradient';

const HomeCampaigns: React.FC = () => {
  // Show only first 2 campaigns on homepage
  const featuredCampaigns = campaigns.slice(0, 2);
  
  return (
    <Section
      title={
        <span>
          Featured <Gradient>Success Stories</Gradient>
        </span>
      }
      subtitle="Discover how we've helped leading brands achieve exceptional results"
      className="bg-gradient-to-b from-white to-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredCampaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              to={`/campaigns/${campaign.id}`}
              className="group block relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <motion.img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Client Logo */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 p-3 rounded-xl shadow-lg">
                    <img 
                      src={campaign.logo} 
                      alt={campaign.client}
                      className="h-8 w-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-3">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {campaign.description}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Views</p>
                      <p className="font-semibold text-gray-900">{campaign.metrics.totalViews}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-violet-50 rounded-lg">
                      <Award className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ROI</p>
                      <p className="font-semibold text-gray-900">{campaign.metrics.roi}</p>
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-500">
                    {campaign.client}
                  </div>
                  <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
                    Explore Success Story
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <Link 
          to="/campaigns"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Discover All Success Stories
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </Section>
  );
};

export default HomeCampaigns;