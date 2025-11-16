import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const companies = [
  { id: 1, name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', slug: 'nike-fitness-campaign' },
  { id: 2, name: 'Apple', logo: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b', slug: 'apple-product-launch' },
  { id: 3, name: 'Tesla', logo: 'https://images.unsplash.com/photo-1617788138017-80ad40651399', slug: 'tesla-sustainability' },
  { id: 4, name: 'Spotify', logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41', slug: 'spotify-music-campaign' },
];

const CompanyLogos = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex space-x-8 overflow-hidden"
          animate={{ x: [-100, 0] }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {companies.map((company) => (
            <Link 
              key={company.id}
              to={`/campaigns/${company.slug}`}
              className="relative group"
            >
              <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">{company.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyLogos;