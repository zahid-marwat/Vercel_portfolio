'use client'

import { FadeInUp, StaggerContainer, SlideInLeft, SlideInRight } from '../animations'
import { motion } from 'framer-motion'

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Airloop',
      position: 'Senior Computer Vision Engineer',
      duration: '2022 - Present',
      location: 'Remote',
      description: 'Leading computer vision projects and AI model development. Responsible for designing and implementing advanced computer vision solutions for various industry applications.',
      achievements: [
        'Developed real-time object detection systems with 95% accuracy',
        'Led a team of 5 engineers in AI project development',
        'Improved model inference speed by 40% through optimization',
        'Implemented MLOps pipelines reducing deployment time by 60%'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Docker', 'AWS']
    }
  ]

  const education = [
    {
      degree: 'Master of Science in Information Security',
      institution: 'National University of Sciences and Technology (NUST)',
      duration: '2024 - 2026',
      description: 'Specialized in information security, secure software development, and AI applications in cybersecurity.',
      status: 'Current'
    },
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      institution: 'Ghulam Ishaq Khan Institute (GIKI)',
      duration: '2018 - 2022',
      description: 'Focus on electrical systems, software development, and data structures. Graduated with distinction.',
      status: 'Completed'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-dark-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Professional journey and educational background
            </p>
          </div>
        </FadeInUp>

        {/* Experience Timeline */}
        <div className="mb-20">
          <FadeInUp delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Experience</h3>
          </FadeInUp>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h4 className="text-2xl font-bold text-white mb-2">{exp.position}</h4>
                    <div className="flex items-center space-x-2 text-primary-400 mb-2">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-gray-400">{exp.duration}</p>
                  </div>
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                  </motion.div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li 
                        key={achIndex} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: achIndex * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: achIndex * 0.3 }}
                        />
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <FadeInUp delay={0.4}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
          </FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-primary-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.duration}</p>
                  </div>
                  <motion.div 
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {edu.status}
                  </motion.div>
                </div>
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
