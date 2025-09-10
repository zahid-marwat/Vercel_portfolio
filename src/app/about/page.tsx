'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Download, ExternalLink, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react'
import { FadeInUp, StaggerContainer, SlideInLeft, SlideInRight } from '../../components/animations'
import { Card3D, Text3D, Button3D } from '../../components/animations/3DEffects'
import { MorphingShape, LiquidMorph, MorphingText } from '../../components/animations/MorphingEffects'
import { FeedbackButton, FeedbackCard, ProgressFeedback } from '../../components/animations/VisualFeedback'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Squares = dynamic(() => import('../../components/Squares'), { ssr: false })

export default function AboutPage() {
  const skills = [
    { name: 'Python', level: 95, category: 'Programming' },
    { name: 'TensorFlow', level: 90, category: 'AI/ML' },
    { name: 'PyTorch', level: 85, category: 'AI/ML' },
    { name: 'OpenCV', level: 92, category: 'Computer Vision' },
    { name: 'JavaScript', level: 85, category: 'Programming' },
    { name: 'React', level: 80, category: 'Frontend' },
  ]

  const education = [
    {
      degree: 'Master of Science in Information Security',
      institution: 'National University of Sciences and Technology (NUST)',
      duration: '2024 - 2026',
      status: 'Current',
      description: 'Specialized in information security, secure software development, and AI applications in cybersecurity.',
      logo: '/assets/NUST.png'
    },
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      institution: 'Ghulam Ishaq Khan Institute (GIKI)',
      duration: '2018 - 2022',
      status: 'Completed',
      description: 'Focus on electrical systems, software development, and data structures.',
      logo: '/assets/GIKI.png'
    }
  ]

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches to solve complex problems'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and open-source community contributions'
    },
    {
      icon: '📈',
      title: 'Continuous Learning',
      description: 'Staying updated with the latest in AI, ML, and computer vision research'
    },
    {
      icon: '❤️',
      title: 'Impact',
      description: 'Creating solutions that make a real difference in people\'s lives'
    }
  ]

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Optimized Squares Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Squares
          direction="right"
          speed={0.1}
          borderColor="rgba(59, 130, 246, 0.06)"
          squareSize={70}
          hoverFillColor="rgba(59, 130, 246, 0.02)"
          frameLimit={15}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-4xl mx-auto text-center mb-16 relative">
              {/* Morphing Background Shape */}
              <div className="absolute inset-0 -z-10">
                <MorphingShape
                  shapes={[
                    'circle(70% at 50% 50%)',
                    'ellipse(100% 80% at 50% 50%)',
                    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    'circle(70% at 50% 50%)'
                  ]}
                  className="w-full h-full bg-gradient-to-br from-primary-500/10 to-blue-500/10 blur-xl"
                />
              </div>
              
              <Text3D 
                text="About Me"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              />
              
              
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Learn more about my journey, experience, and passion for AI & Computer Vision
                </p>
              
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile Image */}
            <SlideInLeft>
              <div className="relative flex justify-center lg:justify-start">
                <Card3D>
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                    <LiquidMorph className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
                    
                      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                        <Image
                          src="/assets/profile-picture.png"
                          alt="Zahid Marwat"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    
                  </div>
                </Card3D>
              </div>
            </SlideInLeft>

            {/* About Content */}
            <SlideInRight>
              <div className="space-y-6">
                <Text3D 
                  text="My Journey in Technology"
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                />
                
                
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate Computer Vision Engineer and AI/ML Enthusiast with a strong 
                    background in software development. Currently pursuing my Master's in Information 
                    Security at NUST, I love working on cutting-edge projects that push the boundaries 
                    of what's possible with artificial intelligence.
                  </p>
                
                
                
                  <p className="text-gray-300 leading-relaxed">
                    My journey in technology began with a fascination for how machines can "see" 
                    and understand the world. This led me to specialize in computer vision, where 
                    I've developed expertise in deep learning, image processing, and AI model deployment.
                  </p>
                
                
                
                  <p className="text-gray-300 leading-relaxed">
                    Currently working as a Senior Computer Vision Engineer at Airloop, I lead teams 
                    in developing innovative AI solutions that solve real-world problems.
                  </p>
                

                {/* Quick Stats */}
                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4 pt-6">
                  <Card3D>
                    <motion.div 
                      className="p-4 rounded-lg bg-primary-500/10 border border-primary-500/20 text-center"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                    >
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-primary-400" />
                        <span className="text-primary-400 font-semibold">Location</span>
                      </div>
                      <div className="text-white">Pakistan</div>
                    </motion.div>
                  </Card3D>
                  
                  <Card3D>
                    <motion.div 
                      className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                    >
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold">Experience</span>
                      </div>
                      <div className="text-white">4 Years</div>
                      
                      <MorphingText
                        texts={["3+ Years", "5+ Years", "3+ Years"]}
                        className="text-white"
                      />
                    </motion.div>
                  </Card3D>
                </StaggerContainer>

                {/* CV Download */}
                <div className="pt-6">
                  <Button3D className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold">
                    <Link
                      href="/assets/Zahid_Marwat_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2"
                      data-cursor-text="Download my resume"
                      data-cursor-variant="grab"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download CV</span>
                    </Link>
                  </Button3D>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-dark-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Text3D 
                text="Technical Skills"
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              
                <p className="text-lg text-gray-300">
                  Comprehensive overview of my technical expertise and capabilities
                </p>
              
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card3D key={index}>
                  <FeedbackCard className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <span className="text-sm text-primary-400 font-medium">{skill.category}</span>
                    </div>
                    
                    <ProgressFeedback
                      progress={skill.level}
                      className="w-full mb-2"
                      showPercentage={false}
                    />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                      
                        <motion.div
                          className="w-2 h-2 bg-primary-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            delay: index * 0.2
                          }}
                        />
                      
                    </div>
                  </FeedbackCard>
                </Card3D>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Text3D 
            text="Education"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          <p className="text-lg text-gray-300">
            Academic background and qualifications
          </p>
        </div>
          </FadeInUp>
          <div className="max-w-4xl mx-auto space-y-8">
        <StaggerContainer staggerDelay={0.2}>
          {education.map((edu, index) => (
            <Card3D key={index}>
          <FeedbackCard
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1 mb-4 lg:mb-0">
            <div className="flex items-start justify-between mb-3">
              <Text3D 
                text={edu.degree}
                className="text-2xl font-bold text-white"
                depth={2}
              />
            </div>
            <div className="flex items-center space-x-2 text-primary-400 mb-2">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">{edu.institution}</span>
            </div>
            <p className="text-gray-400 mb-4">{edu.duration}</p>
            <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
              <div className="flex-shrink-0 lg:ml-8 flex flex-col items-center justify-center">
            <Link
              href={edu.institution === 'National University of Sciences and Technology (NUST)'
                ? 'https://nust.edu.pk/'
                : edu.institution === 'Ghulam Ishaq Khan Institute (GIKI)'
              ? 'https://giki.edu.pk/'
              : '#'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={edu.logo}
                alt={`${edu.institution} logo`}
                width={64}
                height={64}
                className="w-16 h-16 object-contain rounded-xl border border-white/10 bg-white/10"
              />
            </Link>
            <motion.div 
              className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                edu.status === 'Current' 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-blue-500/20 text-blue-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {edu.status}
            </motion.div>
              </div>
            </div>
          </FeedbackCard>
            </Card3D>
          ))}
        </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Text3D 
                text="My Values & Approach"
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              
                <p className="text-lg text-gray-300">
                  The principles that guide my work and collaboration
                </p>
              
            </div>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card3D key={index}>
                <FeedbackCard
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full"
                >
                  
                    <motion.div 
                      className="text-4xl mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: index * 0.5
                      }}
                    >
                      {value.icon}
                    </motion.div>
                  
                  
                  <MorphingText
                    texts={[value.title]}
                    className="text-xl font-semibold text-white mb-3"
                  />
                  
                  
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  
                </FeedbackCard>
              </Card3D>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              <Text3D 
                text="Let's Work Together"
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              
              
                <p className="text-lg text-gray-300 mb-8">
                  Ready to bring your AI and computer vision projects to life? Let's discuss how I can help.
                </p>
              
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button3D className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2"
                    data-cursor-text="Let's connect!"
                    data-cursor-variant="pointer"
                  >
                    <span>Get In Touch</span>
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </Button3D>
                
                <Button3D className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold">
                  <Link
                    href="/projects"
                    className="inline-flex items-center space-x-2"
                    data-cursor-text="Check out my work"
                    data-cursor-variant="pointer"
                  >
                    <span>View My Work</span>
                  </Link>
                </Button3D>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
