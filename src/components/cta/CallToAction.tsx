import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2850')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 via-indigo-600/95 to-violet-600/95" />
      </div>

      {/* Content */}
      <div className="relative py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
              className="inline-flex mb-6"
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-400/20 to-violet-400/20 backdrop-blur-sm border border-white/10">
                <Sparkles className="w-8 h-8 text-blue-100" />
              </div>
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block mt-2 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the leading brands that trust ADRIXA for creating impactful influencer marketing campaigns that drive real results
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-full text-lg font-semibold hover:from-blue-600 hover:to-violet-600 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px] justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/campaigns"
                className="group flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full text-lg font-semibold hover:bg-white/15 transition-all duration-300 backdrop-blur-sm border border-white/20 min-w-[200px] justify-center"
              >
                View Success Stories
                <Star className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default CallToAction;