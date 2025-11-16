import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Campaign } from '../../types';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => (
  <Link 
    to={`/campaigns/${campaign.id}`} 
    className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="relative overflow-hidden aspect-video">
      <img 
        src={campaign.image} 
        alt={campaign.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width="400"
        height="225"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
            {campaign.title}
          </h3>
          <p className="text-sm text-indigo-600 font-medium">{campaign.client}</p>
        </div>
        <span className="text-gray-400 group-hover:text-indigo-600 transition-colors">
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
      <div className="pt-4 border-t border-gray-100">
        <span className="text-sm font-medium text-gray-900">{campaign.results}</span>
      </div>
    </div>
  </Link>
);

export default CampaignCard;