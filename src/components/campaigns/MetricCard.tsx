import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <p className="text-gray-500 text-sm mb-2">{label}</p>
    <p className="text-2xl font-bold text-indigo-600">{value}</p>
  </div>
);