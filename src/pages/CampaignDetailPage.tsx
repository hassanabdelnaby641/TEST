import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { campaigns } from '../data/campaigns';
import CampaignHero from '../components/campaigns/detail/CampaignHero';
import CampaignContent from '../components/campaigns/detail/CampaignContent';
import Meta from '../components/SEO/Meta';

const CampaignDetailPage = () => {
  const { id } = useParams();
  const campaign = campaigns.find(c => c.id === Number(id));

  if (!campaign) {
    return <Navigate to="/campaigns" replace />;
  }

  return (
    <>
      <Meta 
        title={`${campaign.title} - Case Study`}
        description={campaign.description}
        image={campaign.image}
        type="article"
      />
      
      <div className="min-h-screen">
        <CampaignHero {...campaign} />
        <CampaignContent 
          strategy={campaign.strategy}
          objectives={campaign.objectives}
          videos={campaign.videos}
        />
      </div>
    </>
  );
};

export default CampaignDetailPage;