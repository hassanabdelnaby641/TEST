import React from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';
import StatCard from './StatCard';

const statsData = [
  {
    icon: Target,
    value: '500+',
    label: 'Successful Campaigns',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Active Influencers',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: TrendingUp,
    value: '50M+',
    label: 'Audience Reach',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    value: '95%',
    label: 'Client Satisfaction',
    gradient: 'from-pink-500 to-rose-500'
  }
];

const Stats = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2850')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              gradient={stat.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;