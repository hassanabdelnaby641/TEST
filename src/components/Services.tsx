import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, BarChart2, Target, Lightbulb, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Influencer Matching',
    description: 'Connect with influencers that perfectly align with your brand values and target audience.',
    gradient: 'from-blue-500 to-indigo-500',
    delay: 0.1
  },
  {
    icon: BarChart2,
    title: 'Campaign Management',
    description: 'End-to-end campaign planning, execution, and optimization for maximum impact.',
    gradient: 'from-indigo-500 to-purple-500',
    delay: 0.2
  },
  {
    icon: Target,
    title: 'Performance Analytics',
    description: 'Detailed metrics and insights to measure and optimize your campaign ROI.',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.3
  },
  {
    icon: Lightbulb,
    title: 'Strategic Planning',
    description: 'Custom strategies tailored to your specific goals and target markets.',
    gradient: 'from-pink-500 to-rose-500',
    delay: 0.4
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive influencer marketing solutions to help your brand reach new heights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link 
                  to="/services"
                  className="block bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-indigo-600 font-medium group/link">
                      Learn More
                      <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;