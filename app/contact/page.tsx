'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation regex (supports various formats)
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\(\)\+\.]+$/;
    const digitCount = phone.replace(/\D/g, '').length;
    return phoneRegex.test(phone) && digitCount >= 10;
  };

  // Validate fields and update errors
  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        if (value.trim() === '') return 'Email is required';
        return !validateEmail(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        if (value.trim() === '') return 'Phone number is required';
        return !validatePhone(value) ? 'Please enter a valid phone number (at least 10 digits)' : '';
      default:
        return '';
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate the field if it's a required field
    if (name !== 'message') {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Check if form is valid
  useEffect(() => {
    const hasName = formData.name.trim() !== '';
    const hasValidEmail = formData.email.trim() !== '' && validateEmail(formData.email);
    const hasValidPhone = formData.phone.trim() !== '' && validatePhone(formData.phone);
    const hasNoErrors = !errors.name && !errors.email && !errors.phone;

    setIsValid(hasName && hasValidEmail && hasValidPhone && hasNoErrors);
  }, [formData, errors]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation check
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone)
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every(error => error === '')) {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        setSubmitStatus('success');

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-8 md:p-12 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-center text-lg mb-8 text-[var(--foreground)]/80">
          Ready to start your project? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 w-2xl max-w-[90%]">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded bg-[var(--background)] border ${
                errors.name ? 'border-red-500' : 'border-[var(--accent)]/30'
              } text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded bg-[var(--background)] border ${
                errors.email ? 'border-red-500' : 'border-[var(--accent)]/30'
              } text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded bg-[var(--background)] border ${
                errors.phone ? 'border-red-500' : 'border-[var(--accent)]/30'
              } text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors`}
              placeholder="(123) 456-7890"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded bg-[var(--background)] border border-[var(--accent)]/30 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-vertical"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-900/30 border border-green-500 rounded text-green-400">
              Thank you for contacting us! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-900/30 border border-red-500 rounded text-red-400">
              There was an error sending your message. Please try again or contact us directly.
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`w-full px-8 py-4 font-bold rounded transition-all ${
                isValid && !isSubmitting
                  ? 'bg-[var(--accent)] text-[var(--background)] hover:bg-[#d4be7d] cursor-pointer'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-12 pt-8 border-t border-[var(--accent)]/30 text-center">
          <p className="text-lg mb-2">Prefer to call or email directly?</p>
          <p className="text-lg mb-2">Phone: (720) 235-2457</p>
          <p className="text-lg mb-2">Email: leonardo.nav33@gmail.com</p>
          <p className="text-[var(--foreground)]/80">
            We're here to help answer any questions you may have.
          </p>
        </div>
      </div>
    </main>
  );
}
