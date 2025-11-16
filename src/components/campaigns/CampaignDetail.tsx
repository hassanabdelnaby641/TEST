import React from 'react';
import { Target, Star } from 'lucide-react';
import VideoCard from './VideoCard';
import { MetricCard } from './MetricCard';
import { CampaignDetailProps } from './types';
import { ScrollableCarousel } from '../../components/ui/ScrollableCarousel/index';

const CampaignDetail: React.FC<CampaignDetailProps> = ({
  title,
  client,
  logo,
  description,
  videos,
  metrics,
  objectives,
  strategy
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-12">
        {/* Client Logo & Overview */}
        <section className="flex flex-col md:flex-row items-start gap-8">
          {logo && (
            <img 
              src={logo} 
              alt={`${client} logo`}
              className="w-48 object-contain"
            />
          )}
          <div>
            <h2 className="text-3xl font-bold mb-6">Campaign Overview</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
        </section>

        {/* Videos Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold">Top Performing Campaign Videos</h2>
          </div>
          <ScrollableCarousel>
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </ScrollableCarousel>
        </section>

        {/* Metrics Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Campaign Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <MetricCard label="Total Views" value={metrics.totalViews} />
            <MetricCard label="Total Engagement" value={metrics.totalEngagement} />
            <MetricCard label="Click-Through Rate" value={metrics.clickThroughRate} />
            <MetricCard label="Conversion Rate" value={metrics.conversionRate} />
            <MetricCard label="ROI" value={metrics.roi} />
          </div>
        </section>

        {/* Strategy & Objectives */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Campaign Strategy</h2>
            <p className="text-gray-600">{strategy}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Objectives</h2>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <Target className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                  <span className="text-gray-600">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CampaignDetail;