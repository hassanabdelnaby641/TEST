import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { openYouTubeVideo } from './utils/videoUtils';

interface VideoCardProps {
  title: string;
  url: string;
  views: string;
  engagement: string;
  thumbnail?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  url,
  views,
  engagement,
  thumbnail
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    openYouTubeVideo(url);
  };
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail section - clickable */}
      <button 
        onClick={handleClick}
        className="relative aspect-video w-full cursor-pointer group overflow-hidden"
        aria-label={`Watch ${title} on YouTube`}
      >
        <motion.img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-16 h-16 text-white opacity-90" />
          </motion.div>
        </motion.div>
      </button>

      {/* Content section */}
      <div className="p-6">
        <button
          onClick={handleClick}
          className="w-full text-left"
        >
          <h3 className={`font-semibold text-lg mb-3 line-clamp-2 transition-colors duration-300 ${
            isHovered ? 'text-indigo-600' : 'text-gray-900'
          }`}>
            {title}
          </h3>
        </button>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">{views} views</p>
            <p className="text-sm text-gray-600">{engagement}</p>
          </div>
          <motion.button 
            onClick={handleClick}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium px-4 py-2 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;