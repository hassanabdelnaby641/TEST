import React from 'react';

interface StoryCardProps {
  title: string;
  content: string;
  colorClass: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, content, colorClass }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    <h3 className={`text-xl font-bold ${colorClass} mb-3`}>{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default StoryCard;