import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import TikTokIcon from '../icons/TikTokIcon';

const socialLinks = [
  { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
  { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: TikTokIcon, url: 'https://tiktok.com', label: 'TikTok' }
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors duration-200 group"
          aria-label={label}
        >
          <Icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;