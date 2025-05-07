import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  CreditCardIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Browse Licenses',
    description: 'Explore our extensive collection of software licenses from leading providers.',
  },
  {
    icon: CreditCardIcon,
    title: 'Secure Payment',
    description: 'Make secure payments using our encrypted payment system.',
  },
  {
    icon: DocumentCheckIcon,
    title: 'Instant Delivery',
    description: 'Receive your license keys instantly after successful payment.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Guaranteed Support',
    description: 'Get 24/7 support and assistance with your software licenses.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50 dark:bg-gray-900">
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
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get your software licenses in four simple steps. We've made the process as smooth and secure as possible.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Card */}
              <div className="card p-6 h-full hover-lift">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 dark:bg-gray-700" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-400">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust SoftSell for their software license needs.
              </p>
              <button className="btn-primary">
                Browse Licenses
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 