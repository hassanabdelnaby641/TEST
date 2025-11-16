import React from 'react';
import FooterColumn from './footer/FooterColumn';
import FooterLink from './footer/FooterLink';
import SocialLinks from './footer/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <FooterColumn title="ADRIXA">
            <p className="text-gray-400 mb-6">
              Empowering brands through authentic influencer partnerships
            </p>
            <SocialLinks />
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/campaigns">Success Stories</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            <ul className="space-y-3">
              <FooterLink to="/services#influencer-matching">Influencer Matching</FooterLink>
              <FooterLink to="/services#campaign-management">Campaign Management</FooterLink>
              <FooterLink to="/services#performance-analytics">Performance Analytics</FooterLink>
              <FooterLink to="/services#strategic-planning">Strategic Planning</FooterLink>
            </ul>
          </FooterColumn>

          {/* Contact Info */}
          <FooterColumn title="Contact">
            <ul className="space-y-3 text-gray-400">
              <li>123 Innovation Drive</li>
              <li>San Francisco, CA 94105</li>
              <li>contact@adrixa.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ADRIXA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <FooterLink to="/privacy" external>Privacy Policy</FooterLink>
              <FooterLink to="/terms" external>Terms of Service</FooterLink>
              <FooterLink to="/sitemap" external>Sitemap</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;