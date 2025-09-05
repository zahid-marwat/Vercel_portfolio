'use client'

import Link from 'next/link'
import { Calendar, MapPin, ExternalLink, Award, TrendingUp, Users, Code, Sparkles, Brain, Target, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Import optimized background component
const Squares = dynamic(() => import('@/components/Squares'), { ssr: false })

// Import animation components
import { Card3D, Text3D, Button3D } from '@/components/animations/3DEffects'
import { MorphingShape, MorphingText, MorphingIcon, LiquidMorph } from '@/components/animations/MorphingEffects'
import { FeedbackCard, FeedbackButton, ProgressFeedback } from '@/components/animations/VisualFeedback'

export default function ExperiencePage() {
  const experience = [
    {
      company: 'Airloop',
      position: 'Senior Computer Vision Engineer',
      duration: '2022 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Leading computer vision projects and AI model development. Responsible for designing and implementing advanced computer vision solutions for various industry applications.',
      achievements: [
        'Developed real-time object detection systems with 95% accuracy',
        'Led a team of 5 engineers in AI project development',
        'Improved model inference speed by 40% through optimization techniques',
        'Implemented MLOps pipelines reducing deployment time by 60%',
        'Successfully delivered 15+ AI projects across different domains',
        'Mentored junior developers and established best practices'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Docker', 'AWS', 'Kubernetes', 'MLOps'],
      companyUrl: 'https://airloop.io',
      companyLogo: '/assets/airloop-logo.png'
    }
  ]

  const education = [
    {
      degree: 'Master of Science in Information Security',
      institution: 'National University of Sciences and Technology (NUST)',
      duration: '2024 - 2026',
      location: 'Islamabad, Pakistan',
      status: 'Current',
      description: 'Specialized in information security, secure software development, and AI applications in cybersecurity. Research focus on adversarial attacks in computer vision systems.',
      coursework: [
        'Advanced Cryptography',
        'Network Security',
        'Secure Software Development',
        'AI Security and Privacy',
        'Digital Forensics',
        'Risk Assessment and Management'
      ],
      gpa: 'Current CGPA: 3.8/4.0',
      logo: '/assets/nust-logo.png',
      website: 'https://nust.edu.pk'
    },
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      institution: 'Ghulam Ishaq Khan Institute (GIKI)',
      duration: '2018 - 2022',
      location: 'Topi, Pakistan',
      status: 'Completed',
      description: 'Focus on electrical systems, software development, and data structures. Graduated with distinction and completed final year project on computer vision applications.',
      coursework: [
        'Digital Signal Processing',
        'Computer Programming',
        'Data Structures and Algorithms',
        'Control Systems',
        'Machine Learning',
        'Software Engineering'
      ],
      gpa: 'CGPA: 3.6/4.0',
      logo: '/assets/giki-logo.png',
      website: 'https://giki.edu.pk'
    }
  ]

  const certifications = [
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2023',
      description: 'Demonstrated proficiency in building and training neural networks using TensorFlow',
      credentialId: 'TF-2023-CV-001',
      skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Computer Vision']
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Expertise in designing distributed systems on AWS platform',
      credentialId: 'AWS-SAA-2023-001',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Scalability']
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: '2022',
      description: 'Comprehensive understanding of deep learning concepts and applications',
      credentialId: 'DL-SPEC-2022-001',
      skills: ['Deep Learning', 'CNNs', 'RNNs', 'PyTorch', 'Keras']
    },
    {
      title: 'Computer Vision Nanodegree',
      issuer: 'Udacity',
      date: '2022',
      description: 'Advanced computer vision techniques and real-world applications',
      credentialId: 'UD-CV-2022-001',
      skills: ['OpenCV', 'Image Processing', 'Object Detection', 'Face Recognition']
    }
  ]

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'MATLAB'],
      icon: Code
    },
    {
      category: 'AI & Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'YOLO'],
      icon: TrendingUp
    },
    {
      category: 'Web Development',
      items: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Flask', 'Django'],
      icon: Code
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'MLOps'],
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Optimized Squares Background */}
      <div className="fixed inset-0 -z-50 opacity-70">
        <Squares
          direction="up"
        />
      </div>
      
      {/* Morphing Background */}
      <div className="fixed inset-0 pointer-events-none">
        <MorphingShape
          shapes={["circle", "square", "triangle"]}
          className="absolute top-20 right-10 w-64 h-64 opacity-20"
        />
        <LiquidMorph
          className="absolute bottom-20 left-10 w-96 h-96 opacity-10"
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <Text3D
              text="My Experience"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
              depth={3}
            />
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              <MorphingText
                texts={[
                  "Professional journey, education, and technical expertise",
                  "Building innovative solutions with cutting-edge technology",
                  "Transforming ideas into reality through code and creativity"
                ]}
                className="inline-block"
              />
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Text3D
                text="Professional Experience"
                className="text-3xl md:text-4xl font-bold mb-4"
                depth={2}
              />
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card3D className="group cursor-pointer">
                    <FeedbackCard className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1 mb-6 lg:mb-0">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <Text3D
                                text={exp.position}
                                className="text-2xl font-bold text-white mb-2"
                                depth={1}
                              />
                              <div className="flex items-center space-x-4 text-primary-400 mb-2">
                                <Link
                                  href={exp.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold hover:text-primary-300 transition-colors duration-200 flex items-center space-x-2 group"
                                >
                                  <MorphingText
                                    texts={[exp.company]}
                                    className="inline-block"
                                  />
                                  <motion.div
                                    whileHover={{ scale: 1.2, rotate: 15 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </motion.div>
                                </Link>
                                <span>•</span>
                                <span>{exp.type}</span>
                              </div>
                              <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                                <div className="flex items-center space-x-1">
                                  <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                  >
                                    <Calendar className="w-4 h-4" />
                                  </motion.div>
                                  <span>{exp.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                  >
                                    <MapPin className="w-4 h-4" />
                                  </motion.div>
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary-500/30 flex-shrink-0 ml-4">
                              <motion.span 
                                className="text-2xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                🏢
                              </motion.span>
                            </div>
                          </div>

                          <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-300 mb-6 leading-relaxed"
                          >
                            {exp.description}
                          </motion.p>

                          <div className="mb-6">
                            <Text3D
                              text="Key Achievements:"
                              className="text-lg font-semibold text-white mb-4"
                              depth={1}
                            />
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.li 
                                  key={achIndex} 
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                                  className="flex items-start space-x-3 group"
                                >
                                  <motion.div 
                                    className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"
                                    whileHover={{ scale: 1.5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                  ></motion.div>
                                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <Text3D
                              text="Technologies Used:"
                              className="text-lg font-semibold text-white mb-3"
                              depth={1}
                            />
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: techIndex * 0.05,
                                    type: "spring",
                                    stiffness: 400 
                                  }}
                                  className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30 hover:border-primary-400 cursor-pointer"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </FeedbackCard>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-dark-800/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Text3D
                text="Education"
                className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
                depth={2}
              />
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card3D className="h-full">
                    <FeedbackCard className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <Text3D
                              text={edu.degree}
                              className="text-xl font-bold text-white pr-4"
                              depth={1}
                            />
                            <motion.div 
                              className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                                edu.status === 'Current' 
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              }`}
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              {edu.status}
                            </motion.div>
                          </div>
                          <Link
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-200 flex items-center space-x-2 mb-2 group"
                          >
                            <MorphingText
                              texts={[edu.institution]}
                              className="inline-block"
                            />
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 15 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.div>
                          </Link>
                          <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                            <div className="flex items-center space-x-1">
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <Calendar className="w-4 h-4" />
                              </motion.div>
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <MapPin className="w-4 h-4" />
                              </motion.div>
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-gray-300 text-sm leading-relaxed mb-4"
                          >
                            {edu.description}
                          </motion.p>
                          
                          <div className="mb-4">
                            <Text3D
                              text="Key Coursework:"
                              className="text-sm font-semibold text-white mb-2"
                              depth={0.5}
                            />
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.slice(0, 4).map((course, courseIndex) => (
                                <motion.span
                                  key={courseIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: courseIndex * 0.05,
                                    type: "spring",
                                    stiffness: 400 
                                  }}
                                  className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs border border-blue-500/30 hover:border-blue-400 cursor-pointer"
                                >
                                  {course}
                                </motion.span>
                              ))}
                              {edu.coursework.length > 4 && (
                                <motion.span 
                                  className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs border border-gray-500/30"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  +{edu.coursework.length - 4} more
                                </motion.span>
                              )}
                            </div>
                          </div>
                          
                          <motion.div 
                            className="text-sm text-gray-400"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <div className="flex items-center space-x-2">
                              <span>{edu.gpa}</span>
                              <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${(parseFloat(edu.gpa.split(': ')[1].split('/')[0]) / 4.0) * 100}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                ></motion.div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </FeedbackCard>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Text3D
                text="Certifications & Credentials"
                className="text-3xl md:text-4xl font-bold mb-4"
                depth={2}
              />
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card3D className="h-full">
                    <FeedbackCard className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <Text3D
                            text={cert.title}
                            className="text-lg font-bold text-white mb-1"
                            depth={1}
                          />
                          <motion.p 
                            className="text-primary-400 font-semibold text-sm mb-1"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <MorphingText
                              texts={[cert.issuer]}
                              className="inline-block"
                            />
                          </motion.p>
                          <motion.p 
                            className="text-gray-400 text-sm mb-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            {cert.date}
                          </motion.p>
                        </div>
                        <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 ml-4 border border-primary-500/30">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Award className="w-6 h-6 text-primary-400" />
                          </motion.div>
                        </div>
                      </div>
                      
                      <motion.p 
                        className="text-gray-300 text-sm mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {cert.description}
                      </motion.p>
                      
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: skillIndex * 0.05,
                                type: "spring",
                                stiffness: 400 
                              }}
                              className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium border border-green-500/30 hover:border-green-400 cursor-pointer"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <motion.p 
                        className="text-xs text-gray-500"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Credential ID: {cert.credentialId}
                      </motion.p>
                    </FeedbackCard>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-dark-800/30 relative">
        {/* Background morphing shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <MorphingShape
            shapes={["hexagon", "star", "pentagon"]}
            className="absolute top-10 left-10 w-32 h-32 opacity-10"
          />
          <LiquidMorph className="absolute bottom-10 right-10 w-48 h-48 opacity-5" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Text3D
                text="Technical Skills"
                className="text-3xl md:text-4xl font-bold mb-4"
                depth={2}
              />
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card3D className="h-full">
                      <FeedbackCard className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 15 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Icon className="w-5 h-5 text-primary-400" />
                            </motion.div>
                          </div>
                          <Text3D
                            text={skillGroup.category}
                            className="text-lg font-semibold text-white"
                            depth={1}
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              whileHover={{ 
                                scale: 1.05, 
                                y: -3,
                                backgroundColor: "rgba(99, 102, 241, 0.3)"
                              }}
                              transition={{ 
                                duration: 0.3, 
                                delay: skillIndex * 0.05,
                                type: "spring",
                                stiffness: 400 
                              }}
                              className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30 hover:border-primary-400 cursor-pointer"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </FeedbackCard>
                    </Card3D>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <LiquidMorph className="absolute top-0 left-0 w-full h-full opacity-5" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center relative z-10"
          >
            <Text3D
              text="Let's Work Together"
              className="text-3xl md:text-4xl font-bold mb-6"
              depth={2}
            />
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              <MorphingText
                texts={[
                  "Interested in collaborating? Let's discuss how my experience can help bring your projects to life.",
                  "Ready to transform ideas into reality? Let's build something amazing together.",
                  "Have a project in mind? I'd love to hear about it and explore how we can make it happen."
                ]}
                className="inline-block"
              />
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button3D>
                  <FeedbackButton>
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-primary-500"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Users className="w-5 h-5" />
                      </motion.div>
                      <span>Get In Touch</span>
                    </Link>
                  </FeedbackButton>
                </Button3D>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button3D>
                  <FeedbackButton>
                    <Link
                      href="/projects"
                      className="inline-flex items-center space-x-2 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                    >
                      <span>View My Work</span>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    </Link>
                  </FeedbackButton>
                </Button3D>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
