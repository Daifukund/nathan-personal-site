'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactLinks = [
    {
      name: 'Email',
      value: 'nathan.douziech@gmail.com',
      href: 'mailto:nathan.douziech@gmail.com',
      icon: '✉️',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/nathan-douziech',
      href: 'https://linkedin.com/in/nathan-douziech',
      icon: '💼',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'GitHub',
      value: 'github.com/Daifukund',
      href: 'https://github.com/Daifukund',
      icon: '💻',
      color: 'from-gray-700 to-gray-900'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Whether you're looking to hire, partner, or just chat about AI, startups, 
            or the future of work – I'd love to hear from you.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Interested in collaborating, hiring, or just chatting? Let's talk.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{link.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {link.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-center break-all">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Quick Contact
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Ready to discuss your next project, explore collaboration opportunities, 
              or learn more about Bypass? Drop me a line and let's start the conversation.
            </p>
            
            <a
              href="mailto:nathan.douziech@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 