'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  BriefcaseIcon, 
  CodeBracketIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  SparklesIcon,
  CommandLineIcon,
  CloudIcon,
  CpuChipIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const businessSkills = [
    { 
      name: 'Product Strategy', 
      icon: RocketLaunchIcon, 
      level: 95, 
      color: 'from-purple-500 to-purple-600',
      description: 'End-to-end product planning and roadmap development'
    },
    { 
      name: 'Business Development', 
      icon: UserGroupIcon, 
      level: 90, 
      color: 'from-blue-500 to-blue-600',
      description: 'Partnership building and market expansion strategies'
    },
    { 
      name: 'Financial Modelling', 
      icon: ChartBarIcon, 
      level: 88, 
      color: 'from-green-500 to-green-600',
      description: 'Complex financial analysis and forecasting'
    },
    { 
      name: 'Sales', 
      icon: CurrencyDollarIcon, 
      level: 85, 
      color: 'from-orange-500 to-orange-600',
      description: 'B2B sales and client relationship management'
    }
  ]

  const techSkills = {
    Frontend: {
      icon: CommandLineIcon,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React', level: 92, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'Tailwind', level: 88, icon: '🎨' }
      ]
    },
    Backend: {
      icon: CloudIcon,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'Supabase', level: 82, icon: '🗄️' }
      ]
    },
    AI: {
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'OpenAI API', level: 90, icon: '🤖' },
        { name: 'Prompt Engineering', level: 85, icon: '💭' }
      ]
    },
    Infra: {
      icon: CloudIcon,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Vercel', level: 88, icon: '▲' },
        { name: 'Git', level: 92, icon: '📦' },
        { name: 'Stripe', level: 80, icon: '💳' }
      ]
    }
  }

  const getFilteredSkills = () => {
    return techSkills
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <LightBulbIcon className="w-4 h-4" />
            <span>My Expertise</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Business & Tech Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bridging business acumen with technical expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Business Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <BriefcaseIcon className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Biz Toolbox
                </h3>
                <p className="text-green-600 dark:text-green-400">Strategic & Commercial</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {businessSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {skill.level}%
                    </div>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tech Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <CodeBracketIcon className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Tech Stack
                </h3>
                <p className="text-blue-600 dark:text-blue-400">Development & AI</p>
              </div>
            </div>
            
            <div className="space-y-8">
              {Object.entries(getFilteredSkills()).map(([category, categoryData], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + categoryIndex * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryData.color}`}>
                      <categoryData.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category}:
                    </h4>
                  </div>
                  
                  <div className="grid gap-3">
                    {categoryData.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: 0.9 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 1.2 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                              className={`h-full bg-gradient-to-r ${categoryData.color} rounded-full`}
                            />
                          </div>
                          <span className="text-sm font-bold text-gray-600 dark:text-gray-400 min-w-[3rem]">
                            {skill.level}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <SparklesIcon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Full-Stack Entrepreneur</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Combining deep business acumen with cutting-edge technical skills to build products that solve real-world problems and drive meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 