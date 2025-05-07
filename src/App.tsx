import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import AIDemoChatWidget from './components/AIDemoChatWidget'
import './App.css'

const App = () => {
  // Check for dark mode preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  SoftSell
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Your trusted partner for software license management and resale.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Pricing', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {[
                  'Microsoft Licenses',
                  'Adobe Licenses',
                  'Autodesk Licenses',
                  'Other Software',
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  support@softsell.com
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  +1 (555) 123-4567
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  123 Tech Street
                  <br />
                  San Francisco, CA 94107
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                © {new Date().getFullYear()} SoftSell. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <AIDemoChatWidget />
    </div>
  )
}

export default App
