'use client'

import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { FadeInUp, StaggerContainer, ScaleIn, HoverCard, RevealAnimation } from '../animations'
import { NeonGlow, TextReveal, LiquidAnimation } from '../animations/SpecialEffects'
import { Card3D, Text3D, Button3D } from '../animations/3DEffects'
import { MorphingShape, LiquidMorph, MorphingIcon } from '../animations/MorphingEffects'
import { SkeletonCard } from '../animations/SkeletonScreens'
import { FeedbackButton, FeedbackCard } from '../animations/VisualFeedback'
import { motion } from 'framer-motion'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Face Recognition System',
      description: 'Real-time face detection and recognition system using deep learning for automated attendance and security applications.',
      image: '/assets/project-face-recognition.jpg',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'SQLite'],
      features: [
        'Real-time face detection with 99% accuracy',
        'Multi-face recognition capabilities',
        'Web-based dashboard for management',
        'RESTful API for integration'
      ],
      liveUrl: 'https://face-recognition-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/face-recognition-system',
      category: 'Computer Vision'
    },
    {
      title: 'Traffic Monitoring System',
      description: 'Intelligent traffic monitoring and analysis system using computer vision to detect vehicles, count traffic, and analyze patterns.',
      image: '/assets/project-traffic-monitoring.jpg',
      technologies: ['Python', 'YOLO', 'OpenCV', 'FastAPI', 'PostgreSQL'],
      features: [
        'Vehicle detection and classification',
        'Real-time traffic counting',
        'Speed estimation and monitoring',
        'Analytics dashboard with insights'
      ],
      liveUrl: 'https://traffic-monitor-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/traffic-monitoring-system',
      category: 'Computer Vision'
    },
    {
      title: 'Modern Portfolio Website',
      description: 'Responsive portfolio website built with Next.js, featuring modern design, smooth animations, and optimized performance.',
      image: '/assets/project-portfolio.jpg',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Modern responsive design',
        'Smooth animations and transitions',
        'SEO optimized',
        'Fast loading performance'
      ],
      liveUrl: 'https://zahid-marwat.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/portfolio-website',
      category: 'Web Development'
    }
  ]

  const categories = ['All', 'Computer Vision', 'AI & ML', 'Web Development']

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            {/* Morphing Background Shape */}
            <div className="absolute inset-0 -z-10">
              <MorphingShape
                shapes={[
                  'circle(70% at 50% 50%)',
                  'ellipse(100% 80% at 50% 50%)',
                  'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  'circle(70% at 50% 50%)'
                ]}
                className="w-full h-full bg-gradient-to-br from-primary-500/5 to-blue-500/5 blur-xl"
              />
            </div>
            
            <Text3D 
              text="Featured Projects" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            />
            
           
              <p>
                Explore my portfolio of innovative AI solutions and web applications
              </p>

          </div>
        </FadeInUp>

        {/* Category Filter */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-primary-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FadeInUp>

        {/* Projects Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <Card3D className="h-full">
                <div
                  className="group h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Project Image with 3D Effects */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-blue-500/20 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-dark-800/50"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10 p-6 h-full flex items-center justify-center">
                      <motion.div 
                        className="text-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="text-4xl mb-2"
                          animate={{ 
                            rotateY: [0, 10, -10, 0]
                          }}
                          transition={{
                            duration: 3,
                            ease: "easeInOut"
                          }}
                        >
                          {project.category === 'Computer Vision' ? '👁️' : 
                           project.category === 'AI & ML' ? '🧠' : '💻'}
                        </motion.div>
                        <motion.span 
                          className="text-primary-400 text-sm font-medium"
                          whileHover={{ color: "#60a5fa" }}
                        >
                          {project.category}
                        </motion.span>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0, scale: 0.8, x: 20 }}
                      whileHover={{ opacity: 1, scale: 1, x: 0 }}
                    >
                      <div className="flex space-x-2">
                        <Button3D className="w-8 h-8 bg-primary-500 hover:bg-primary-600 rounded-full p-0">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </Link>
                        </Button3D>
                        <Button3D className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full p-0">
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center"
                          >
                            <Github className="w-4 h-4 text-white" />
                          </Link>
                        </Button3D>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <Text3D 
                      text={project.title}
                      className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300"
                    />
                    <RevealAnimation delay={0.1}>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </RevealAnimation>

                    {/* Features */}
                    <RevealAnimation delay={0.2}>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 2).map((feature, featureIndex) => (
                            <motion.li 
                              key={featureIndex} 
                              className="flex items-start space-x-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: featureIndex * 0.1 }}
                            >
                              <motion.div 
                                className="w-1 h-1 bg-primary-400 rounded-full mt-2 flex-shrink-0"
                                animate={{ 
                                  scale: [1, 1.5, 1],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  delay: featureIndex * 0.5 
                                }}
                              />
                              <span className="text-gray-400 text-xs">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </RevealAnimation>

                    {/* Technologies */}
                    <RevealAnimation delay={0.3}>
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs font-medium cursor-pointer"
                              whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: "rgba(59, 130, 246, 0.4)",
                                y: -2
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > 3 && (
                            <motion.span 
                              className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs"
                              whileHover={{ scale: 1.05 }}
                            >
                              +{project.technologies.length - 3} more
                            </motion.span>
                          )}
                        </div>
                      </div>
                    </RevealAnimation>

                    {/* Action Buttons */}
                    <RevealAnimation delay={0.4}>
                      <div className="flex space-x-3">
                        <Button3D className="flex-1 bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                          >
                            Live Demo
                          </Link>
                        </Button3D>
                        <Button3D className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 rounded-lg text-sm font-medium border border-white/20 hover:border-white/40">
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                          >
                            View Code
                          </Link>
                        </Button3D>
                      </div>
                    </RevealAnimation>
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </StaggerContainer>

        {/* View All Projects Button */}
        <FadeInUp delay={0.4}>
          <div className="text-center">
            <Button3D className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2"
              >
                <span>View All Projects</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </Button3D>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default ProjectsSection
