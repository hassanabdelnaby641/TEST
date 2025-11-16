import React from 'react';
import { motion } from 'framer-motion';
import { Users2, TrendingUp, Target, Award, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Users2,
    title: 'Expert Team',
    description: 'Our seasoned professionals bring years of industry expertise to your campaigns',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Shield,
    title: 'Proven Results',
    description: 'Consistent track record of successful campaigns and measurable ROI',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Target,
    title: 'Custom Strategy',
    description: "Tailored approach for each brand's unique needs and goals",
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Quick campaign deployment without compromising on quality',
    gradient: 'from-rose-500 to-orange-500'
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven',
    description: 'Strategic decisions backed by comprehensive analytics and insights',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Setting the standard for influencer marketing excellence',
    gradient: 'from-cyan-500 to-blue-500'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ADRIXA
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine creative excellence with proven strategies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 h-full">
                  {/* Icon Container */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;