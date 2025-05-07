import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: ShieldCheckIcon,
    title: '100% Authentic',
    description: 'All our licenses are verified and guaranteed to be authentic.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Best Prices',
    description: 'Get the best value for your money with our competitive pricing.',
  },
  {
    icon: ClockIcon,
    title: 'Instant Delivery',
    description: 'Receive your license keys instantly after payment.',
  },
  {
    icon: UserGroupIcon,
    title: '24/7 Support',
    description: 'Our dedicated support team is always ready to help you.',
  },
  {
    icon: ChartBarIcon,
    title: 'Volume Discounts',
    description: 'Special pricing for bulk license purchases.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Coverage',
    description: 'Licenses available for all regions and markets.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-white dark:bg-gray-800">
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
            Why Choose <span className="gradient-text">SoftSell</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're committed to providing the best software license resale experience with unmatched benefits.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card p-6 h-full hover-lift group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Happy Customers' },
              { value: '50K+', label: 'Licenses Sold' },
              { value: '24/7', label: 'Support' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['Microsoft', 'Adobe', 'Autodesk', 'Oracle', 'VMware'].map((company) => (
              <div key={company} className="text-xl font-bold text-gray-400 dark:text-gray-600">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 