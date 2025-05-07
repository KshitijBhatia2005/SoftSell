import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const licenseTypes = [
  'Microsoft Office',
  'Adobe Creative Cloud',
  'Autodesk',
  'Other',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData);
      alert('Thank you for your submission! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        licenseType: '',
        message: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'support@softsell.com',
      link: 'mailto:support@softsell.com',
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPinIcon,
      title: 'Office',
      content: '123 Tech Street, San Francisco, CA 94107',
      link: 'https://maps.google.com',
    },
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-2 mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions about our services? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-8 bg-white/90 dark:bg-gray-800/80 shadow-xl rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-primary bg-gray-100 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-primary bg-gray-100 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-primary bg-gray-100 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-primary bg-gray-100 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    License Type
                  </label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className="input-primary bg-gray-100 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                  >
                    <option value="">Select a license type</option>
                    {licenseTypes.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-primary bg-gray-100 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-400/50 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto group shadow-lg hover:shadow-xl focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                  Send Message
                  <PaperAirplaneIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 hover-lift group block"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map or additional info */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Business Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 