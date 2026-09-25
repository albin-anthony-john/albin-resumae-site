"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { personalInfo } from '@/lib/data';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const { serviceId, templateId, publicKey } = emailJsConfig;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      setSubmitMessage(
        'Email service is not configured. Please email me directly using the address on the left.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          contact_info: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        { publicKey }
      );

      setSubmitStatus('success');
      setSubmitMessage('Thanks! Your message was sent successfully.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
      setSubmitMessage(
        `Something went wrong. Please try again or email me at ${personalInfo.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Let&apos;s discuss your next big project or opportunity
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Phone</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Location</div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Available for
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Full-time opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Contract projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Technical consulting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Architecture reviews
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-colors disabled:opacity-60`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email or Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-colors disabled:opacity-60`}
                    placeholder="Enter your email or phone number"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border ${
                      errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-colors disabled:opacity-60`}
                    placeholder="How can I help?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-colors resize-none disabled:opacity-60`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {submitMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`text-sm ${
                      submitStatus === 'success'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={
                    isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )
                  }
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
