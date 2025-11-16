import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { campaigns } from '../data/campaigns';
import CampaignCard from '../components/campaigns/CampaignCard';
import SearchBar from '../components/campaigns/SearchBar';
import { useSearch } from '../hooks/useSearch';
import Meta from '../components/SEO/Meta';

const CampaignsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCampaigns = useSearch(campaigns, searchTerm);

  return (
    <>
      <Meta 
        title="Our Success Stories"
        description="Explore our portfolio of successful influencer marketing campaigns and discover how we've helped brands achieve their goals."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2850')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-indigo-900/90" />
          </div>

          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Success
                <span className="block bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Discover how we've helped leading brands achieve exceptional results through strategic influencer partnerships
              </p>
            </motion.div>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50" />
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            {/* Search Bar */}
            <SearchBar 
              value={searchTerm}
              onChange={setSearchTerm}
              resultsCount={filteredCampaigns.length}
            />

            {/* Campaigns Grid */}
            <AnimatePresence mode="wait">
              {filteredCampaigns.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {filteredCampaigns.map((campaign, index) => (
                    <motion.div
                      key={campaign.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CampaignCard campaign={campaign} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-xl text-gray-600">
                    No campaigns found matching your search.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignsPage;