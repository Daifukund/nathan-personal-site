'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { 
  ArrowTopRightOnSquareIcon, 
  SparklesIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(event.clientX - centerX)
    mouseY.set(event.clientY - centerY)
  }

  const features = [
    { icon: RocketLaunchIcon, title: 'AI-Powered Outreach', desc: 'Smart matching algorithms' },
    { icon: UserGroupIcon, title: 'Direct Connection', desc: 'Skip the application pile' },
    { icon: ChartBarIcon, title: 'Success Analytics', desc: 'Track your progress' },
    { icon: LightBulbIcon, title: 'Smart Insights', desc: 'Personalized recommendations' }
  ]

  const techStack = [
    { name: 'Next.js', color: 'from-black to-gray-800', icon: '⚡' },
    { name: 'Supabase', color: 'from-green-500 to-green-600', icon: '🗄️' },
    { name: 'OpenAI', color: 'from-blue-500 to-blue-600', icon: '🤖' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-700', icon: '📘' },
    { name: 'Tailwind', color: 'from-cyan-500 to-cyan-600', icon: '🎨' }
  ]

  const stats = [
    { number: '1000+', label: 'Students Helped' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Partner Companies' }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
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
            className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <RocketLaunchIcon className="w-4 h-4" />
            <span>Featured Project</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions that make a real impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>
        
        {/* Main Project Card with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ 
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d"
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  x: [0, Math.random() * 100, 0],
                  y: [0, Math.random() * 100, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-0 relative z-10">
            {/* Left Column - Project Details */}
            <div className="p-8 lg:p-12 space-y-8">
              {/* Project Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2"
                  >
                    <Image
                      src="/bypass-logo.jpg"
                      alt="Bypass Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                      Bypass
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                      AI Job Outreach Platform
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                A revolutionary SaaS platform that helps students bypass traditional job applications and directly contact decision-makers. Built to transform how students connect with career opportunities through AI-powered insights.
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                  >
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-purple-600" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-medium shadow-lg flex items-center gap-2`}
                    >
                      <span>{tech.icon}</span>
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Status & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                    Early access launched July 2025
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://bypass-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    View Project
                  </motion.a>
                  
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Interactive Showcase */}
            <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 p-8 lg:p-12 flex flex-col justify-center">
              {/* Floating Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-white/10 rounded-full"
                    animate={{
                      y: [0, -100, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Main Showcase */}
              <div className="relative z-10 text-center">
                {/* Animated Logo */}
                <motion.div
                  animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 mx-auto relative overflow-hidden"
                >
                  <motion.div 
                    className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center relative p-2"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/bypass-logo.jpg"
                      alt="Bypass Logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </motion.div>
                  
                  {/* Orbiting Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full" />
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full" />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full" />
                  </motion.div>
                </motion.div>
                
                <motion.h4 
                  className="text-3xl font-bold text-white mb-4"
                  animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                >
                  Bypass
                </motion.h4>
                
                <motion.p 
                  className="text-blue-100 text-lg mb-8"
                  animate={isHovered ? { y: -5 } : { y: 0 }}
                >
                  Connecting students directly to decision-makers
                </motion.p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Animated Indicators */}
                <div className="flex justify-center space-x-4">
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      className="w-3 h-3 bg-white/60 rounded-full"
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 