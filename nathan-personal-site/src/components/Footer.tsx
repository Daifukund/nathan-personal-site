'use client'

import { motion } from 'framer-motion'
import { HeartIcon, RocketLaunchIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, CodeBracketIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:nathan.douziech@gmail.com',
      icon: EnvelopeIcon,
      color: 'hover:text-red-400',
      label: 'nathan.douziech@gmail.com'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/nathan-douziech',
      icon: UserIcon,
      color: 'hover:text-blue-400',
      label: 'LinkedIn'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Daifukund',
      icon: CodeBracketIcon,
      color: 'hover:text-purple-400',
      label: 'GitHub'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
              >
                <span className="text-xl font-bold text-white">ND</span>
              </motion.div>
              <h3 className="text-3xl font-bold">Nathan Douziech</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Building AI solutions that revolutionize how students connect with opportunities. 
              Let's create the future of work together.
            </p>

            {/* Status Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <RocketLaunchIcon className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Working on AI solutions</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPinIcon className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Based in Paris, France</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-left py-2 px-3 rounded-lg hover:bg-gray-800/50"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Newsletter/Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-800/30"
            >
              <h5 className="font-bold text-white mb-2">Stay Updated</h5>
              <p className="text-gray-400 text-sm mb-4">
                Follow my journey building AI solutions and tech projects
              </p>
              <div className="flex gap-2">
                {socialLinks.slice(1).map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 bg-gray-800 rounded-lg ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className={`p-2 bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className={`w-5 h-5 text-gray-400 ${social.color}`} />
                  </div>
                  <div>
                    <div className="font-medium text-white">{social.name}</div>
                    <div className="text-gray-400 text-sm">{social.label}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Simplified */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-400">
                © {currentYear} Nathan Douziech. Built with passion.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                Made with <HeartIcon className="w-4 h-4 text-red-400" /> using Next.js & Tailwind
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 