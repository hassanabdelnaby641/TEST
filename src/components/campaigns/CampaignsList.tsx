import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Campaign } from '../../types';

interface CampaignsListProps {
  campaigns: Campaign[];
  limit?: number;
}

const CampaignsList: React.FC<CampaignsListProps> = ({ campaigns, limit }) => {
  const displayedCampaigns = limit ? campaigns.slice(0, limit) : campaigns;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedCampaigns.map((campaign) => (
        <Link 
          key={campaign.id}
          to={`/campaigns/${campaign.id}`}
          className="group"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{campaign.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-gray-500">{campaign.results}</span>
                <span className="flex items-center text-indigo-600 font-semibold">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CampaignsList;