import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <motion.img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
            {name}
          </h3>
          <p className="text-indigo-600 font-medium mb-4">{role}</p>
          <p className="text-gray-600 mb-6">{bio}</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-indigo-600 transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-indigo-600 transition-colors"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;