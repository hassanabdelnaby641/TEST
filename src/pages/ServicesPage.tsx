import React from 'react';
import { Users, BarChart2, Target, Lightbulb } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Influencer Matching',
    description: 'Connect with influencers that perfectly align with your brand values and target audience.',
    icon: Users,
    features: [
      'AI-powered influencer discovery',
      'Brand alignment analysis',
      'Audience demographics matching',
      'Performance history verification',
      'Engagement rate analysis'
    ]
  },
  {
    title: 'Campaign Management',
    description: 'End-to-end campaign planning, execution, and optimization for maximum impact.',
    icon: BarChart2,
    features: [
      'Strategic campaign planning',
      'Content calendar management',
      'Real-time performance tracking',
      'Crisis management',
      'Budget optimization'
    ]
  },
  {
    title: 'Performance Analytics',
    description: 'Detailed metrics and insights to measure and optimize your campaign ROI.',
    icon: Target,
    features: [
      'Real-time engagement tracking',
      'Conversion attribution',
      'Competitor analysis',
      'ROI calculation',
      'Custom reporting dashboards'
    ]
  },
  {
    title: 'Strategic Planning',
    description: 'Custom strategies tailored to your specific goals and target markets.',
    icon: Lightbulb,
    features: [
      'Market research',
      'Competitor analysis',
      'Target audience profiling',
      'Channel strategy',
      'Content strategy development'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-indigo-900/90" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-200">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive influencer marketing solutions designed to help your brand reach new heights
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50" />
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your marketing goals
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;