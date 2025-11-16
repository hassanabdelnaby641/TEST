import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Video } from '../types';
import VideoCard from './VideoCard';
import { ScrollableCarousel } from '../../ui/ScrollableCarousel/index';

interface CampaignVideosProps {
  videos: Video[];
}

const CampaignVideos: React.FC<CampaignVideosProps> = ({ videos }) => {
  return (
    <div className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex p-3 bg-rose-100 rounded-xl mb-6">
            <Play className="w-8 h-8 text-rose-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Top Performance Videos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most impactful content pieces that drove exceptional results
          </p>
        </motion.div>

        <ScrollableCarousel>
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </ScrollableCarousel>
      </div>
    </div>
  );
};

export default CampaignVideos;