import React from 'react';
import CampaignVideos from './CampaignVideos';
import CampaignStrategy from './CampaignStrategy';
import { Video } from '../types';

interface CampaignContentProps {
  strategy: string;
  objectives: string[];
  videos: Video[];
}

const CampaignContent: React.FC<CampaignContentProps> = ({
  strategy,
  objectives,
  videos
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
      {/* Top Performance Videos Section */}
      <CampaignVideos videos={videos} />
      
      {/* Strategy and Objectives Section */}
      <CampaignStrategy 
        strategy={strategy} 
        objectives={objectives} 
      />
    </div>
  );
};

export default CampaignContent;