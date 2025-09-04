'use client'

import Link from 'next/link'
import { ExternalLink, Github, Eye, Filter, Search } from 'lucide-react'
import { FadeInUp, StaggerContainer, SlideInLeft, SlideInRight } from '../../components/animations'
import { Card3D, Text3D, Button3D } from '../../components/animations/3DEffects'
import { MorphingShape, LiquidMorph, MorphingText, MorphingIcon } from '../../components/animations/MorphingEffects'
import { FeedbackButton, FeedbackCard } from '../../components/animations/VisualFeedback'
import { motion } from 'framer-motion'
import LightRays from '../../components/LightRays'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Face Recognition System',
      description: 'A comprehensive real-time face detection and recognition system using deep learning technologies. Built for automated attendance tracking and security applications with high accuracy and performance.',
      longDescription: 'This advanced computer vision system leverages state-of-the-art deep learning models to provide real-time face detection and recognition capabilities. The system can handle multiple faces simultaneously, works in various lighting conditions, and includes features like anti-spoofing and liveness detection.',
      image: '/assets/face-recognition-preview.jpg',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'SQLite', 'dlib', 'NumPy'],
      category: 'Computer Vision',
      featured: true,
      features: [
        'Real-time face detection with 99.2% accuracy',
        'Multi-face recognition capabilities',
        'Anti-spoofing and liveness detection',
        'Web-based dashboard for user management',
        'RESTful API for system integration',
        'Attendance tracking and reporting',
        'Works in various lighting conditions',
        'Database integration for user profiles'
      ],
      challenges: [
        'Optimizing model performance for real-time processing',
        'Handling various lighting and environmental conditions',
        'Implementing robust anti-spoofing mechanisms',
        'Scaling system for multiple concurrent users'
      ],
      results: [
        '99.2% face recognition accuracy',
        '< 100ms processing time per frame',
        'Successfully deployed in 5+ organizations',
        '50% reduction in manual attendance tracking'
      ],
      liveUrl: 'https://face-recognition-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/face-recognition-system',
      status: 'Completed',
      year: '2023'
    },
    {
      id: 2,
      title: 'Intelligent Traffic Monitoring System',
      description: 'Computer vision-based traffic monitoring solution that detects vehicles, counts traffic, estimates speed, and provides comprehensive analytics for smart city applications.',
      longDescription: 'An intelligent traffic monitoring system that uses YOLO object detection and computer vision techniques to analyze traffic patterns, count vehicles, estimate speeds, and provide real-time insights for traffic management.',
      image: '/assets/traffic-monitoring-preview.jpg',
      technologies: ['Python', 'YOLO', 'OpenCV', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      category: 'Computer Vision',
      featured: true,
      features: [
        'Real-time vehicle detection and classification',
        'Traffic density analysis and counting',
        'Speed estimation and monitoring',
        'License plate recognition (OCR)',
        'Traffic violation detection',
        'Real-time analytics dashboard',
        'Historical data analysis',
        'API integration for third-party systems'
      ],
      challenges: [
        'Accurate vehicle detection in crowded scenarios',
        'Speed estimation without specialized hardware',
        'Processing high-resolution video streams',
        'Handling various weather and lighting conditions'
      ],
      results: [
        '95% vehicle detection accuracy',
        'Real-time processing of 4K video streams',
        '±5 km/h speed estimation accuracy',
        'Deployed in 3 smart city pilot projects'
      ],
      liveUrl: 'https://traffic-monitor-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/traffic-monitoring-system',
      status: 'Completed',
      year: '2023'
    },
    {
      id: 3,
      title: 'Modern Portfolio Website',
      description: 'A responsive, modern portfolio website built with Next.js and TypeScript. Features smooth animations, dark theme, SEO optimization, and excellent performance scores.',
      longDescription: 'A cutting-edge portfolio website showcasing modern web development practices with Next.js 14, TypeScript, Tailwind CSS, and advanced animations. Optimized for performance, accessibility, and SEO.',
      image: '/assets/portfolio-preview.jpg',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      category: 'Web Development',
      featured: true,
      features: [
        'Modern responsive design',
        'Smooth animations and transitions',
        'SEO optimized with meta tags',
        'Fast loading performance',
        'Dark theme with gradient accents',
        'Interactive UI components',
        'Mobile-first approach',
        'Static site generation'
      ],
      challenges: [
        'Achieving 100% Lighthouse scores',
        'Implementing smooth animations without performance loss',
        'Creating a unique and memorable design',
        'Ensuring cross-browser compatibility'
      ],
      results: [
        '100/100 Lighthouse Performance score',
        '< 1s First Contentful Paint',
        'Perfect accessibility score',
        'Deployed and optimized for global CDN'
      ],
      liveUrl: 'https://zahid-marwat.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/portfolio-website',
      status: 'Live',
      year: '2024'
    },
    {
      id: 4,
      title: 'Medical Image Classification System',
      description: 'Deep learning-powered medical image classification system for automated diagnosis assistance. Trained on large datasets with high accuracy for medical professionals.',
      longDescription: 'An advanced medical AI system that assists healthcare professionals in diagnosing medical conditions through automated image analysis using convolutional neural networks and transfer learning.',
      image: '/assets/medical-ai-preview.jpg',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Flask', 'Docker', 'DICOM'],
      category: 'AI & ML',
      featured: false,
      features: [
        'Medical image classification',
        'Multi-class disease detection',
        'Transfer learning implementation',
        'DICOM image support',
        'Confidence scoring',
        'Batch processing capabilities',
        'Integration with medical systems',
        'Detailed reporting and analytics'
      ],
      challenges: [
        'Working with sensitive medical data',
        'Achieving high accuracy for medical applications',
        'Handling various medical image formats',
        'Ensuring compliance with medical standards'
      ],
      results: [
        '96.8% classification accuracy',
        'Reduced diagnosis time by 40%',
        'Successfully tested in clinical environment',
        'HIPAA compliant implementation'
      ],
      liveUrl: 'https://medical-ai-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/medical-image-classification',
      status: 'Completed',
      year: '2023'
    },
    {
      id: 5,
      title: 'Real-time Object Detection API',
      description: 'High-performance REST API for real-time object detection using YOLO models. Supports batch processing, multiple image formats, and scalable deployment.',
      longDescription: 'A robust and scalable API service that provides real-time object detection capabilities using state-of-the-art YOLO models, designed for integration into various applications and systems.',
      image: '/assets/object-detection-api-preview.jpg',
      technologies: ['Python', 'FastAPI', 'YOLO', 'OpenCV', 'Redis', 'Docker', 'AWS'],
      category: 'AI & ML',
      featured: false,
      features: [
        'Real-time object detection',
        'RESTful API endpoints',
        'Batch image processing',
        'Multiple model support',
        'Caching with Redis',
        'Containerized deployment',
        'Auto-scaling capabilities',
        'Comprehensive API documentation'
      ],
      challenges: [
        'Optimizing inference speed',
        'Handling concurrent requests',
        'Managing memory usage efficiently',
        'Implementing proper error handling'
      ],
      results: [
        '< 200ms average response time',
        '1000+ concurrent request handling',
        '99.9% uptime reliability',
        'Successfully integrated in 10+ applications'
      ],
      liveUrl: 'https://object-detection-api.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/object-detection-api',
      status: 'Live',
      year: '2024'
    },
    {
      id: 6,
      title: 'Data Analytics Dashboard',
      description: 'Interactive data visualization dashboard built with React and D3.js. Features real-time data updates, multiple chart types, and export capabilities.',
      longDescription: 'A comprehensive analytics dashboard that provides interactive data visualizations, real-time monitoring, and advanced filtering capabilities for business intelligence applications.',
      image: '/assets/analytics-dashboard-preview.jpg',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      category: 'Web Development',
      featured: false,
      features: [
        'Interactive data visualizations',
        'Real-time data updates',
        'Multiple chart types',
        'Advanced filtering and search',
        'Data export capabilities',
        'Responsive design',
        'User authentication',
        'Role-based access control'
      ],
      challenges: [
        'Handling large datasets efficiently',
        'Implementing real-time updates',
        'Creating intuitive user interface',
        'Optimizing chart rendering performance'
      ],
      results: [
        'Processes 1M+ data points smoothly',
        'Real-time updates with < 100ms latency',
        'Improved decision-making by 35%',
        'Used by 500+ business analysts'
      ],
      liveUrl: 'https://analytics-dashboard-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/analytics-dashboard',
      status: 'Completed',
      year: '2022'
    }
  ]

  const categories = ['All', 'Computer Vision', 'AI & ML', 'Web Development', 'Data Science']

  const featuredProjects = projects.filter(project => project.featured)
  const allProjects = projects

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Light Rays Background */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={1.2}
          lightSpread={0.6}
          rayLength={1.8}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.03}
          className="opacity-30"
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-16 relative">
              {/* Morphing Background Shape */}
              <div className="absolute inset-0 -z-10">
                <MorphingShape
                  shapes={[
                    'circle(70% at 50% 50%)',
                    'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                    'ellipse(100% 60% at 50% 50%)',
                    'circle(70% at 50% 50%)'
                  ]}
                  className="w-full h-full bg-gradient-to-br from-primary-500/10 to-blue-500/10 blur-xl"
                />
              </div>
              
              <Text3D 
                text="My Projects"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              />
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Explore my portfolio of innovative AI solutions and web applications
              </p>
            </div>
          </FadeInUp>

          {/* Category Filter */}
          <FadeInUp delay={0.2}>
            <StaggerContainer staggerDelay={0.1} className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category, index) => (
                <Button3D
                  key={index}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-primary-500/30'
                  }`}
                  data-cursor-text={`Filter by ${category}`}
                  data-cursor-variant="pointer"
                >
                  {category}
                </Button3D>
              ))}
            </StaggerContainer>
          </FadeInUp>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="mb-12">
              <Text3D 
                text="Featured Projects"
                className="text-3xl md:text-4xl font-bold text-center mb-4"
              />
              <p className="text-lg text-gray-300 text-center">
                Highlighting my most impactful and innovative work
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-dark-800/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="mb-12">
              <Text3D 
                text="All Projects"
                className="text-3xl md:text-4xl font-bold text-center mb-4"
              />
              <p className="text-lg text-gray-300 text-center">
                Complete collection of my development work
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={false} />
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
                text="Have a Project In Mind?"
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              
              <p className="text-lg text-gray-300 mb-8">
                Let's collaborate to bring your ideas to life with cutting-edge technology
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button3D className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2"
                    data-cursor-text="Let's start a project!"
                    data-cursor-variant="pointer"
                  >
                    <span>Start a Project</span>
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </Button3D>
                
                <Button3D className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold">
                  <Link
                    href="/about"
                    className="inline-flex items-center space-x-2"
                    data-cursor-text="Learn more about me"
                    data-cursor-variant="pointer"
                  >
                    <span>Learn More About Me</span>
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

function ProjectCard({ project, featured }: { project: any; featured: boolean }) {
  return (
    <Card3D>
      <FeedbackCard className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 overflow-hidden h-full">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-blue-500/20 overflow-hidden">
          <LiquidMorph className="absolute inset-0 bg-dark-800/50" />
          <div className="relative z-10 p-6 h-full flex items-center justify-center">
            <div className="text-center">
              <MorphingIcon
                icons={[
                  project.category === 'Computer Vision' ? '👁️' : 
                  project.category === 'AI & ML' ? '🧠' : 
                  project.category === 'Web Development' ? '💻' : '📊'
                ]}
                className="text-4xl mb-2 block"
              />
              <span className="text-primary-400 text-sm font-medium">{project.category}</span>
              {featured && (
                <motion.div 
                  className="absolute top-4 left-4 bg-primary-500 text-white px-2 py-1 rounded text-xs font-medium"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: ['0 0 0px rgba(59, 130, 246, 0)', '0 0 20px rgba(59, 130, 246, 0.5)', '0 0 0px rgba(59, 130, 246, 0)']
                  }}
                  transition={{ duration: 2 }}
                >
                  Featured
                </motion.div>
              )}
            </div>
          </div>
          <motion.div 
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0.8, y: -10 }}
            whileHover={{ scale: 1, y: 0 }}
          >
            <div className="flex space-x-2">
              <Button3D className="w-8 h-8 bg-primary-500 hover:bg-primary-600 rounded-full p-0">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                  data-cursor-text="View live demo"
                  data-cursor-variant="pointer"
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
                  data-cursor-text="View source code"
                  data-cursor-variant="grab"
                >
                  <Github className="w-4 h-4 text-white" />
                </Link>
              </Button3D>
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
            <Text3D 
              text={project.title}
              className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 flex-1"
              depth={1}
            />
            <div className="flex items-center space-x-2 text-xs text-gray-400 ml-2">
              <span>{project.year}</span>
              <motion.div 
                className={`w-2 h-2 rounded-full ${
                  project.status === 'Live' ? 'bg-green-400' : 
                  project.status === 'Completed' ? 'bg-blue-400' : 'bg-yellow-400'
                }`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature: string, index: number) => (
                <motion.li 
                  key={index} 
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-1 h-1 bg-primary-400 rounded-full mt-2 flex-shrink-0"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, delay: index * 0.3 }}
                  />
                  <span className="text-gray-400 text-xs">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6 flex-1">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech: string, index: number) => (
                <motion.span
                  key={index}
                  className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs font-medium cursor-pointer"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(59, 130, 246, 0.3)",
                    y: -1
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 4 && (
                <motion.span 
                  className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs"
                  whileHover={{ scale: 1.05 }}
                >
                  +{project.technologies.length - 4} more
                </motion.span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-auto">
            <Button3D className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-2 rounded-lg text-sm font-medium">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
                data-cursor-text="View live demo"
                data-cursor-variant="pointer"
              >
                Live Demo
              </Link>
            </Button3D>
            <Button3D className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 rounded-lg text-sm font-medium">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
                data-cursor-text="View source code"
                data-cursor-variant="grab"
              >
                View Code
              </Link>
            </Button3D>
          </div>
        </div>
      </FeedbackCard>
    </Card3D>
  )
}
