'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions that make a real impact
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <CodeBracketIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Bypass
                </h3>
              </div>
              
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                AI Job Outreach Platform
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                A SaaS that helps students bypass traditional job applications and directly contact 
                decision-makers. Built to revolutionize how students connect with opportunities.
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Supabase', 'OpenAI', 'TypeScript', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Status:</h4>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                    Early access launched July 2025
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  View Project
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  <CodeBracketIcon className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">B</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Bypass</h4>
                <p className="text-blue-100 text-lg">
                  Connecting students directly to decision-makers
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 