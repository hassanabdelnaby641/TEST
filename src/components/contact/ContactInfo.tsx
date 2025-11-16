import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Office Location</h3>
          <p className="mt-1 text-gray-600">
            123 Innovation Drive<br />
            San Francisco, CA 94105<br />
            United States
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Phone className="h-6 w-6 text-indigo-600 mt-1" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Phone</h3>
          <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Mail className="h-6 w-6 text-indigo-600 mt-1" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Email</h3>
          <p className="mt-1 text-gray-600">contact@adrixa.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;