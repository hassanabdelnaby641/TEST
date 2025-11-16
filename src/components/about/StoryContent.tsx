import React from 'react';
import { motion } from 'framer-motion';
import StoryCard from './StoryCard';

const storyCards = [
  {
    title: 'My Beginning',
    content: "Hi, I'm Saif Eldin. At 16, my journey in digital marketing began with a simple curiosity about influencer collaborations. What started as experimenting with social media quickly turned into a passion for connecting brands with authentic voices.",
    colorClass: 'text-indigo-600'
  },
  {
    title: 'My Vision',
    content: 'Through my early experiences, I saw a gap in the market. I dreamed of creating not just another agency, but a platform where genuine connections could flourish. This dream became Adrixa - my vision for the future of influencer marketing.',
    colorClass: 'text-purple-600'
  },
  {
    title: 'My Journey',
    content: 'Starting as a young freelancer, I learned the ins and outs of influencer marketing hands-on. Each project taught me valuable lessons about authenticity, strategy, and the power of genuine partnerships. These experiences shaped Adrixa\'s core values.',
    colorClass: 'text-indigo-600'
  },
  {
    title: 'My Mission Today',
    content: 'Today, I lead Adrixa with the same passion that sparked my journey at 16. My goal is to revolutionize influencer marketing by maintaining the perfect balance between data-driven strategies and authentic storytelling.',
    colorClass: 'text-purple-600'
  }
];

const StoryContent = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="space-y-8"
  >
    <div className="space-y-6">
      {storyCards.map((card, index) => (
        <StoryCard key={index} {...card} />
      ))}
    </div>
  </motion.div>
);

export default StoryContent;