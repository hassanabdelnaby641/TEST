import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormData, ContactFormProps } from './types';
import { validateForm } from './utils';

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateForm(formData);
    
    if (validation.isValid) {
      setIsSubmitting(true);
      setErrors({});
      try {
        await onSubmit(formData);
        // Reset form after successful submission
        setFormData({ name: '', email: '', company: '', message: '' });
        setTouched({});
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validation.errors);
      // Mark all fields as touched to show errors
      const allTouched = Object.keys(formData).reduce((acc, key) => ({
        ...acc,
        [key]: true
      }), {});
      setTouched(allTouched);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    // Validate single field on blur
    const validation = validateForm({ [name]: formData[name as keyof ContactFormData] } as ContactFormData);
    if (!validation.isValid) {
      setErrors(prev => ({ ...prev, [name]: validation.errors[name] }));
    }
  };

  const inputClasses = (name: keyof ContactFormData) => `
    w-full px-4 py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm
    ${touched[name] && errors[name]
      ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
      : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-200'
    }
    focus:ring-4 focus:outline-none transition-all duration-300
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses('name')}
              placeholder="John Doe"
              disabled={isSubmitting}
            />
            <AnimatePresence>
              {touched.name && errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute text-sm text-red-600 mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClasses('email')}
              placeholder="john@example.com"
              disabled={isSubmitting}
            />
            <AnimatePresence>
              {touched.email && errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute text-sm text-red-600 mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Company Input */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses('company')}
          placeholder="Your Company Name"
          disabled={isSubmitting}
        />
      </div>

      {/* Message Input */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses('message')}
            placeholder="How can we help you?"
            disabled={isSubmitting}
          />
          <AnimatePresence>
            {touched.message && errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute text-sm text-red-600 mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium
          hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200 
          disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
          flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;