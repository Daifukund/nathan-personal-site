'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { DocumentArrowDownIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const education = [
    { year: '2025', degree: 'Master in Finance', school: 'UMEA UNIVERSITY' },
    { year: '2024', degree: 'Master in Management', school: 'GEM' },
    { year: '2023', degree: 'Software Development', school: '42 PARIS' }
  ]

  const work = [
    { year: '2024', role: 'Corporate Credit Analyst', company: 'SOCIETE GENERALE' },
    { year: '2023', role: 'Financial Audit', company: 'EY' }
  ]

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Resume Highlights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A journey from finance to tech entrepreneurship
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <DocumentArrowDownIcon className="w-6 h-6" />
              Download Full Resume
            </a>
          </motion.div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {item.degree}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      {item.school}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>
            
            <div className="space-y-6">
              {work.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {item.role}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {item.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Add current project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-6 flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                NOW
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                  Founder & CEO
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  BYPASS - AI Job Outreach SaaS
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 