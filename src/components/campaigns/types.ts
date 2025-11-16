export interface Video {
  title: string;
  url: string;
  views: string;
  engagement: string;
  thumbnail?: string;
}

export interface Metrics {
  totalViews: string;
  totalEngagement: string;
  clickThroughRate: string;
  conversionRate: string;
  roi: string;
}

export interface CampaignDetailProps {
  title: string;
  client: string;
  logo?: string;
  description: string;
  videos: Video[];
  metrics: Metrics;
  objectives: string[];
  strategy: string;
}