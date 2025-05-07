import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const solutions = [
    { name: 'Microsoft Licenses', href: '#' },
    { name: 'Adobe Licenses', href: '#' },
    { name: 'Autodesk Licenses', href: '#' },
    { name: 'Other Software', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                SoftSell
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <span>Solutions</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-2"
                  >
                    {solutions.map((solution) => (
                      <a
                        key={solution.name}
                        href={solution.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {solution.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Contact
            </a>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block btn-primary"
            >
              Get Started
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-800">
                <a
                  href="#solutions"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Solutions
                </a>
                <a
                  href="#how-it-works"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Contact
                </a>
                <button className="w-full mt-4 btn-primary">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 