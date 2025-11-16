import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <Play className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2">
          {video.title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-gray-600">{video.views} views</span>
          </div>
          <div className="text-sm text-indigo-600 font-medium">
            {video.engagement}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;