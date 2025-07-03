'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  BriefcaseIcon,
  LightBulbIcon,
  SparklesIcon,
  PaperAirplaneIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import { UserGroupIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedReason, setSelectedReason] = useState<string>('')

  const contactReasons = [
    {
      icon: BriefcaseIcon,
      title: 'Hiring',
      description: 'Looking for a tech entrepreneur with finance expertise',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: UserGroupIcon,
      title: 'Partnership',
      description: 'Interested in collaborating on AI or fintech projects',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: LightBulbIcon,
      title: 'AI & Startups',
      description: 'Want to discuss AI trends or startup strategies',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Just Chat',
      description: 'Casual conversation about tech or career advice',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ]

  const contactLinks = [
    {
      name: 'Email',
      value: 'nathan.douziech@gmail.com',
      href: 'mailto:nathan.douziech@gmail.com',
      icon: '✉️',
      color: 'from-red-500 to-orange-500',
      description: 'Best for detailed discussions',
      responseTime: '< 24h'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/nathan-douziech',
      href: 'https://linkedin.com/in/nathan-douziech',
      icon: '💼',
      color: 'from-blue-600 to-blue-700',
      description: 'Professional networking',
      responseTime: '< 48h'
    },
    {
      name: 'GitHub',
      value: 'github.com/Daifukund',
      href: 'https://github.com/Daifukund',
      icon: '💻',
      color: 'from-gray-700 to-gray-900',
      description: 'Check out my code',
      responseTime: 'Async'
    }
  ]

  const quickFacts = [
    { icon: MapPinIcon, text: 'Based in Paris, open to global opportunities' },
    { icon: ClockIcon, text: 'CET timezone (UTC+1)' },
    { icon: RocketLaunchIcon, text: 'Currently working on AI solutions' }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header - Streamlined */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <ChatBubbleLeftRightIcon className="w-4 h-4" />
            <span>Let's connect!</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Get In Touch
          </h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you're looking to hire, partner, or discuss AI and startups – I'd love to hear from you.
          </motion.p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8" />
        </motion.div>

        
        {/* Contact Methods */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Hover Effect Background */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: hoveredCard === index ? 1 : 0,
                  opacity: hoveredCard === index ? 0.1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-3xl`}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {link.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300 font-medium break-all">
                    {link.value}
                  </p>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600 dark:text-green-400">
                      Response time: {link.responseTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Quick Facts
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl"
              >
                <fact.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{fact.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Email CTA - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href={`mailto:nathan.douziech@gmail.com?subject=${selectedReason ? `${selectedReason} - ` : ''}Contact from Portfolio`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <PaperAirplaneIcon className="w-6 h-6" />
            Send Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 