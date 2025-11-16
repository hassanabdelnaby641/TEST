import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { campaigns } from '../../data/campaigns';

const FeaturedStories = () => {
  const featuredCampaigns = campaigns.slice(0, 2);
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mb-6">
            <Star className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped leading brands achieve exceptional results
          </p>
        </motion.div>

        {/* Featured Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredCampaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Link 
                to={`/campaigns/${campaign.id}`}
                className="group block relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
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
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-3">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {campaign.description}
                  </p>

                  {/* Results Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                    {campaign.results}
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-8 right-8">
                    <span className="text-gray-400 group-hover:text-indigo-600 transition-colors">
                      <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/campaigns"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Success Stories
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedStories;