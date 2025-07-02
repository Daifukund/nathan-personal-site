'use client'

import { motion } from 'framer-motion'
import { HeartIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Nathan Douziech</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building AI solutions that revolutionize how students connect with opportunities. 
              Let&apos;s create the future of work together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="mailto:nathan.douziech@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              nathan.douziech@gmail.com
            </a>
            <span className="hidden sm:block text-gray-600">•</span>
            <a 
              href="https://linkedin.com/in/nathan-douziech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span className="hidden sm:block text-gray-600">•</span>
            <a 
              href="https://github.com/Daifukund"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Nathan Douziech. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <HeartIcon className="w-4 h-4 text-red-500" />
                <span>in Paris</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 