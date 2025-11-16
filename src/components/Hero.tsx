import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScroll(Math.min(scrolled, 500) / 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Dynamic background with parallax effect */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center"
        style={{
          transform: `scale(${1 + scroll * 0.1})`,
          opacity: 1 - scroll * 0.8
        }}
      />
      
      {/* Multiple gradient overlays for better text visibility */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80"
        style={{
          opacity: 0.7 + scroll * 0.3
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/50"
        style={{
          opacity: 0.6
        }}
      />

      {/* Content that moves and fades based on scroll */}
      <div 
        className="relative z-10 container mx-auto px-4 text-center transform"
        style={{
          transform: `translateY(${scroll * -50}px)`,
          opacity: 1 - scroll * 1.5
        }}
      >
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          Ready to Transform<br />
          Your{" "}
          <motion.span 
            className="relative inline-block"
            style={{
              transform: `translateY(${scroll * -30}px)`
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Success
            </motion.span>
            <motion.span
              className="absolute -inset-1 bg-gradient-to-r from-rose-400/20 via-fuchsia-500/20 to-indigo-500/20 blur-lg"
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.span 
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            />
          </motion.span>
          <span className="text-white">?</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg"
          style={{
            transform: `translateY(${scroll * -20}px)`
          }}
        >
          Join the leading brands that trust ADRIXA for impactful influencer marketing campaigns that drive real results.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          style={{
            transform: `translateY(${scroll * -10}px)`
          }}
        >
          <Link
            to="/contact"
            className="px-8 py-4 bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:from-rose-600 hover:to-fuchsia-700 text-white rounded-full text-lg font-medium transition-all duration-300 min-w-[200px] shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-lg font-medium transition-all duration-300 min-w-[200px] shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/30"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Scroll indicator that fades out */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
        style={{ opacity: 1 - scroll * 2 }}
      >
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll" />
        </div>
      </div>

      {/* Bottom gradient that intensifies on scroll */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"
        style={{
          opacity: 0.5 + scroll * 0.5
        }}
      />
    </div>
  );
};

export default Hero;