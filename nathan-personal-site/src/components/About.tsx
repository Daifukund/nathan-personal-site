'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  WrenchScrewdriverIcon, 
  MapPinIcon,
  SparklesIcon,
  ChartBarIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredFact, setHoveredFact] = useState<number | null>(null)

  const facts = [
    {
      icon: AcademicCapIcon,
      text: 'CLASSE PREPA, GEM, UMEA UNIVERSITY, 42 PARIS',
      category: 'Education',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-800 dark:text-purple-300'
    },
    {
      icon: BriefcaseIcon,
      text: 'KPMG, EY, SOCIETE GENERALE',
      category: 'Experience',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-800 dark:text-blue-300'
    },
    {
      icon: WrenchScrewdriverIcon,
      text: 'Currently building BYPASS (AI job outreach platform)',
      category: 'Current Project',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-800 dark:text-green-300'
    },
    {
      icon: MapPinIcon,
      text: 'Based in PARIS – Open to global collabs',
      category: 'Location',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-800 dark:text-orange-300'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <SparklesIcon className="w-4 h-4" />
            <span>Get to know me</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Intro Text */}
            <div className="relative">
              <motion.p 
                className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                I'm <span className="font-bold text-blue-600 dark:text-blue-400">Nathan</span>, a finance professional turned tech entrepreneur with a passion for solving real-world problems through <span className="font-bold text-purple-600 dark:text-purple-400">AI and automation</span>.
              </motion.p>
              
              {/* Decorative Quote Mark */}
              <div className="absolute -top-4 -left-4 text-6xl text-blue-200 dark:text-blue-800 font-serif">"</div>
            </div>
            
            {/* Enhanced Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <SparklesIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Quick Facts
              </h3>
              
              <div className="space-y-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    onMouseEnter={() => setHoveredFact(index)}
                    onMouseLeave={() => setHoveredFact(null)}
                    className={`group relative p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      hoveredFact === index ? fact.bgColor : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${fact.color} flex-shrink-0`}>
                        <fact.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                          {fact.category}
                        </div>
                        <div className={`font-medium transition-colors duration-300 break-words ${
                          hoveredFact === index ? fact.textColor : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {fact.text}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredFact === index ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Enhanced Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Floating Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl blur-3xl transform rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-3xl blur-3xl transform -rotate-6" />
            
            {/* Main Profile Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src="/nathan-profile.png"
                        alt="Nathan Douziech"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <CodeBracketIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <ChartBarIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Profile Header */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Nathan Douziech
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                    AI Builder & Tech Entrepreneur
                  </p>
                </div>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  Bridging the gap between finance expertise and cutting-edge AI technology to revolutionize how students connect with opportunities.
                </motion.p>
                
                {/* Social Proof Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.1 }}
                  className="flex justify-center gap-4 mt-8"
                >
                  <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Available for projects</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 