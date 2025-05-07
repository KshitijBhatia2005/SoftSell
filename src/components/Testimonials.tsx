import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechCorp Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'SoftSell has transformed how we manage our software licenses. The platform is intuitive, and their support team is exceptional.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    company: 'InnovateSoft',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The best platform for software license management. Fast, secure, and cost-effective. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Procurement Manager',
    company: 'Global Solutions',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'We\'ve saved thousands on software licenses thanks to SoftSell. Their bulk purchase options are fantastic.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
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
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our customers have to say about their experience with SoftSell.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card p-6 h-full hover-lift">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-400">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mr-4">
                  4.9
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Based on 1,000+ customer reviews
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 