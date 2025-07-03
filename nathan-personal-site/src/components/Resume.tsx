'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  DocumentArrowDownIcon, 
  AcademicCapIcon, 
  BriefcaseIcon,
  CalendarDaysIcon,
  MapPinIcon,
  StarIcon,
  TrophyIcon,
  RocketLaunchIcon,
  SparklesIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState<'timeline' | 'education' | 'experience'>('timeline')

  const education = [
    { 
      year: '2025', 
      degree: 'Master in Finance', 
      school: 'UMEA UNIVERSITY',
      location: 'Sweden',
      description: 'Advanced financial modeling and international finance',
      icon: '🇸🇪',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      year: '2024', 
      degree: 'Master in Management', 
      school: 'GEM business school',
      location: 'France',
      description: 'Strategic management and business development',
      icon: '🇫🇷',
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      year: '2023', 
      degree: 'Software Development', 
      school: '42 PARIS',
      location: 'France',
      description: 'Intensive coding bootcamp and software engineering',
      icon: '💻',
      color: 'from-blue-500 to-blue-600'
    }
  ]

  const work = [
    { 
      year: '2025', 
      role: 'Founder', 
      company: 'BYPASS',
      location: 'Paris, France',
      description: 'Building an AI-powered platform that revolutionizes how students connect with career opportunities by bypassing traditional application processes.',
      achievements: ['Launched MVP in July 2025', '1000+ early access users', 'Full-stack development with AI integration'],
      icon: '🚀',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      year: '2024', 
      role: 'Corporate Credit Analyst', 
      company: 'SOCIETE GENERALE',
      location: 'Paris, France',
      description: 'Risk assessment and financial analysis for corporate clients',
      achievements: ['Analyzed €500M+ in credit portfolios', 'Reduced risk assessment time by 30%'],
      icon: '🏦',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      year: '2023', 
      role: 'Financial Audit', 
      company: 'EY',
      location: 'Paris, France',
      description: 'External audit and financial compliance for major corporations',
      achievements: ['Audited 15+ Fortune 500 companies', 'Led junior audit teams'],
      icon: '📊',
      color: 'from-green-500 to-green-600'
    }
  ]

  const timeline = [
    ...education.map(item => ({ ...item, type: 'education' as const })),
    ...work.map(item => ({ ...item, type: 'work' as const })),
    {
      year: '2025',
      type: 'project' as const,
      role: 'Founder',
      company: 'BYPASS',
      location: 'Paris, France',
      description: 'Building an AI-powered platform that revolutionizes how students connect with career opportunities by bypassing traditional application processes.',
      achievements: ['Launched MVP in July 2025', '1000+ early access users', 'Full-stack development with AI integration'],
      icon: '🚀',
      color: 'from-gradient-to-r from-blue-600 to-purple-600'
    }
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year))

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <DocumentArrowDownIcon className="w-4 h-4" />
            <span>Professional Journey</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Resume Highlights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A journey from finance to tech entrepreneurship
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <DocumentArrowDownIcon className="w-6 h-6 group-hover:animate-bounce" />
              Download Full Resume
            </motion.a>
            
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">Available for opportunities</span>
            </div>
          </motion.div>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            {(['timeline', 'education', 'experience'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Content based on active tab */}
        {activeTab === 'timeline' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Node */}
                    <div className="relative z-10 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-4 border-blue-500 flex items-center justify-center">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {'degree' in item ? item.degree : item.role}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            {'school' in item ? item.school : item.company}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                            <MapPinIcon className="w-4 h-4" />
                            {item.location}
                          </p>
                        </div>
                        <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                          {item.year}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                      
                      {'achievements' in item && item.achievements && (
                        <div className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <StarIcon className="w-4 h-4 text-yellow-500" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {item.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {item.degree}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold text-center mb-3">
                  {item.school}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4 flex items-center justify-center gap-1">
                  <MapPinIcon className="w-4 h-4" />
                  {item.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'experience' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {work.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${
                  item.company === 'BYPASS' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700'
                } rounded-2xl p-8 shadow-lg relative overflow-hidden`}
              >
                {item.company === 'BYPASS' && (
                  <div className="absolute inset-0 bg-black/10" />
                )}
                <div className={`${item.company === 'BYPASS' ? 'relative z-10' : ''} flex items-start gap-6`}>
                  <div className={`w-16 h-16 ${
                    item.company === 'BYPASS' 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : `bg-gradient-to-r ${item.color}`
                  } rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-2xl ${item.company === 'BYPASS' ? 'text-white' : ''}`}>
                      {item.icon}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-1 ${
                          item.company === 'BYPASS' 
                            ? 'text-white' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {item.role}
                        </h3>
                        <p className={`font-semibold text-lg ${
                          item.company === 'BYPASS' 
                            ? 'text-blue-100' 
                            : 'text-blue-600 dark:text-blue-400'
                        }`}>
                          {item.company}
                        </p>
                        <p className={`text-sm flex items-center gap-1 ${
                          item.company === 'BYPASS' 
                            ? 'text-blue-200' 
                            : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          <MapPinIcon className="w-4 h-4" />
                          {item.location}
                        </p>
                      </div>
                      <span className={`px-4 py-2 rounded-full font-medium ${
                        item.company === 'BYPASS' 
                          ? 'bg-white/20 backdrop-blur-sm text-white flex items-center gap-2' 
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      }`}>
                        {item.company === 'BYPASS' && (
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        )}
                        {item.company === 'BYPASS' ? 'NOW' : item.year}
                      </span>
                    </div>
                    
                    <p className={`mb-4 text-lg ${
                      item.company === 'BYPASS' 
                        ? 'text-blue-100' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {item.description}
                    </p>
                    
                    {item.company === 'BYPASS' ? (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold">1000+</div>
                          <div className="text-blue-200 text-sm">Early Users</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold">July 2025</div>
                          <div className="text-blue-200 text-sm">Launch Date</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold">AI Integration</div>
                          <div className="text-blue-200 text-sm">Key Feature</div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <StarIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
} 