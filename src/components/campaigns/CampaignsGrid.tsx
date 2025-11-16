import React, { Suspense } from 'react';
import LoadingCard from '../ui/LoadingCard';
import CampaignCard from './CampaignCard';
import { Campaign } from '../../types';

interface CampaignsGridProps {
  campaigns: Campaign[];
  visibleItems: number;
}

const CampaignsGrid: React.FC<CampaignsGridProps> = ({ campaigns, visibleItems }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <Suspense fallback={[...Array(visibleItems)].map((_, i) => (
      <LoadingCard key={i} />
    ))}>
      {campaigns.slice(0, visibleItems).map(campaign => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </Suspense>
  </div>
);

export default CampaignsGrid;