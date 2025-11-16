import React from 'react';
import { motion } from 'framer-motion';
import Vision from '../components/about/Vision';
import Story from '../components/about/Story';
import TeamMember from '../components/about/TeamMember';
import Stats from '../components/stats/Stats';
import Meta from '../components/SEO/Meta';

const teamMembers = [
  {
    name: 'Saif Eldin',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=400',
    bio: 'Digital marketing innovator with a passion for creating authentic brand-influencer partnerships.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Strategy',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400',
    bio: 'Former brand strategist turned influencer marketing expert, specializing in data-driven campaign optimization.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400',
    bio: 'Award-winning creative professional with a passion for authentic storytelling and brand development.'
  }
];

const AboutPage = () => {
  return (
    <>
      <Meta 
        title="About ADRIXA"
        description="Learn about ADRIXA's mission to transform influencer marketing through authentic partnerships and measurable results."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-indigo-900/90" />
          </div>

          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transforming
                <span className="block bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">
                  Digital Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're on a mission to revolutionize how brands and influencers collaborate to create authentic, impactful content
              </p>
            </motion.div>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50" />
        </div>

        {/* Main Content */}
        <div className="bg-gray-50">
          {/* Story Section */}
          <div className="py-20">
            <Story />
          </div>

          {/* Stats Section */}
          <Stats />

          {/* Vision Section */}
          <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">Our Vision & Values</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Guided by innovation and authenticity, we're shaping the future of influencer marketing
                </p>
              </motion.div>
              <Vision />
            </div>
          </div>

          {/* Team Section */}
          <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Passionate experts dedicated to your success
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <TeamMember {...member} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;