import { ContactFormData } from './types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (data: Partial<ContactFormData>): {
  isValid: boolean;
  errors: Record<string, string>;
} => {
  const errors: Record<string, string> = {};

  if ('name' in data) {
    if (!data.name?.trim()) {
      errors.name = 'Name is required';
    } else if (data.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
  }

  if ('email' in data) {
    if (!data.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
  }

  if ('message' in data) {
    if (!data.message?.trim()) {
      errors.message = 'Message is required';
    } else if (data.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};