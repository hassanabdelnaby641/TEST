import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import Meta from '../components/SEO/Meta';
import { ContactFormData } from '../components/contact/types';

const ContactPage = () => {
  const handleSubmit = async (data: ContactFormData) => {
    console.log('Form submitted:', data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Innovation Drive', 'San Francisco, CA 94105', 'United States'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM PST'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@adrixa.com', 'support@adrixa.com'],
    }
  ];

  return (
    <>
      <Meta 
        title="Contact Us"
        description="Get in touch with ADRIXA for all your influencer marketing needs. We're here to help you create impactful campaigns."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2850')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-indigo-900/90" />
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Let's Create Something
                <span className="block bg-gradient-to-r from-rose-400 to-indigo-400 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to elevate your brand? We're here to help you achieve your marketing goals
              </p>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50" />
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <Send className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                  </div>
                  <ContactForm onSubmit={handleSubmit} />
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-2 space-y-8"
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="inline-flex p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mb-6">
                        <info.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-2">{detail}</p>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;