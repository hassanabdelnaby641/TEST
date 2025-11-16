import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, features, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-indigo-600 mb-6" />
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
              <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
            </span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetail;