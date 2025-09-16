
'use client'

import Link from 'next/link'
import { ExternalLink, Eye, Filter, Search } from 'lucide-react'
import { FadeInUp, StaggerContainer, SlideInLeft, SlideInRight } from '../../components/animations'
import { Card3D, Text3D, Button3D } from '../../components/animations/3DEffects'
import { MorphingText, MorphingIcon } from '../../components/animations/MorphingEffects'
import { FeedbackButton, FeedbackCard } from '../../components/animations/VisualFeedback'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'

const Squares = dynamic(() => import('../../components/Squares'), { ssr: false })

export default function ProjectsPage() {
  const projects = [
      {
      id: 8,
      title: 'Smart-Annotator',
      description: 'A desktop React + Electron tool with a Flask backend for efficient image quality control and annotation review.',
      longDescription: 'Smart-Annotator is a cross-platform desktop application built with React and Electron, featuring a Flask backend for robust image annotation quality control. It supports both detection (XML) and segmentation (JSON/LabelMe) formats, per-object attributes, auto-save, and a polished reviewing experience. Designed for annotation teams needing reliability, speed, and consistent metadata.',
      image: '/assets/smart-annotator/1.png',
      images: [
        '/assets/smart-annotator/1.png',
        '/assets/smart-annotator/2.png',
        '/assets/smart-annotator/3.png',
        '/assets/smart-annotator/4.png',
        '/assets/smart-annotator/5.png',
        '/assets/smart-annotator/6.png'
      ],
      technologies: ['React', 'Electron', 'Flask', 'Python', 'LabelMe', 'XML', 'JSON'],
      category: 'Desktop Application',
      featured: false,
      features: [
        'Per-object attributes (JSON + XML), defaults from config, and isolated updates.',
        'Robust save paths (Electron-first with backend fallback) and canonical JSON ordering.',
        'Auto-save plus unified Ctrl+S for both attributes and geometry.',
        'Interactive canvas with polygons, bounding boxes, zoom/pan, and map integration.'
      ],
      challenges: [
        'Synchronizing state between Electron frontend and Flask backend.',
        'Ensuring data consistency across annotation formats.',
        'Providing a seamless user experience for both detection and segmentation tasks.',
        'Implementing efficient auto-save and undo/redo functionality.'
      ],
      results: [
        'Streamlined annotation review workflow.',
        'Reduced manual errors and improved metadata consistency.',
        'Faster quality control cycles for annotation teams.',
        'Adopted by multiple annotation projects for production use.'
      ],
      liveUrl: '',
      githubUrl: 'https://github.com/zahid-marwat/smart-annotator',
      status: 'Completed',
      year: '2025'
    },
    {
      id: 0,
      title: 'Road Assets Condition Index',
      description: 'Detects roadside assets, determines their Asset Condition Index (ACI), location, and performs object detection and condition assessment.',
      longDescription: 'A computer vision solution for smart infrastructure management. The system automatically detects various roadside assets (signs, barriers, lights, etc.), estimates their location using GPS metadata, and computes an Asset Condition Index (ACI) based on visual analysis. Enables authorities to monitor asset health and prioritize maintenance.',
      image: '/assets/road-assets-aci/1.jpg',
      images: [
        '/assets/road-assets-aci/1.jpg',
        '/assets/road-assets-aci/2.jpg',
        '/assets/road-assets-aci/3.jpg',
        '/assets/road-assets-aci/4.jpg',
        '/assets/road-assets-aci/5.jpg',
        '/assets/road-assets-aci/6.jpg',
        '/assets/road-assets-aci/7.jpg',
        '/assets/road-assets-aci/8.jpg',
      ],
      technologies: ['Python', 'YOLO', 'OpenCV', 'FastAPI', 'GeoPandas', 'TensorFlow', 'Docker'],
      category: 'Computer Vision',
      featured: true,
      features: [
        'Roadside asset detection (signs, barriers, lights, etc.)',
        'Asset Condition Index (ACI) calculation',
        'GPS-based location tagging',
        'Object detection and classification',
        'Condition assessment using deep learning',
        'RESTful API for integration',
        'Dashboard for asset monitoring'
      ],
      challenges: [
        'Accurate detection of diverse asset types',
        'Reliable condition scoring from images',
        'Integrating geospatial data with vision outputs',
        'Scaling for large road networks'
      ],
      results: [
        'Automated asset inventory creation',
        'Improved maintenance prioritization',
        'Reduced manual inspection costs',
        'Deployed in pilot smart city projects'
      ],
      liveUrl: 'https://road-assets-aci-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/road-assets-condition-index',
      status: 'Completed',
      year: '2025'
    },
    {
      id: 7,
      title: 'Road Cracks Detection & PCI Assessment',
      description: 'Detects and categorizes road cracks, computes Pavement Condition Index (PCI), and recommends feasible maintenance strategies with detailed bill of quantities.',
      longDescription: 'An AI-powered solution for automated road crack detection and classification using computer vision. The system analyzes road surface images, identifies crack types (longitudinal, transverse, alligator, etc.), calculates the Pavement Condition Index (PCI), and suggests optimal maintenance or construction strategies. It also generates a detailed bill of quantities for repair planning.',
      image: '/assets/cracks-project/1.png',
      images: [
        '/assets/cracks-project/1.png',
        '/assets/cracks-project/2.png',
        '/assets/cracks-project/3.png',
        '/assets/cracks-project/4.png',
        '/assets/cracks-project/5.png',
        '/assets/cracks-project/6.png',
        '/assets/cracks-project/7.png'
      ],
      technologies: ['Python', 'Faster RCNN', 'OpenCV', 'TensorFlow', 'FastAPI', 'GeoPandas', 'YOLO'],
      category: 'Computer Vision',
      featured: true,
      features: [
        'Automated road crack detection and categorization',
        'PCI (Pavement Condition Index) calculation',
        'Maintenance strategy recommendation',
        'Detailed bill of quantities generation',
        'Geospatial mapping of crack locations',
        'RESTful API for integration',
        'Dashboard for visualization and reporting'
      ],
      challenges: [
        'Accurate crack type classification',
        'Reliable PCI scoring from image data',
        'Generating actionable maintenance plans',
        'Integrating with GIS and asset management systems'
      ],
      results: [
        'Automated PCI assessment for large road networks',
        'Optimized maintenance planning and budgeting',
        'Reduced manual survey costs',
        'Successfully piloted in municipal infrastructure projects'
      ],
      liveUrl: 'https://road-cracks-detection-demo.vercel.app',
      githubUrl: 'https://github.com/zahid-marwat/road-cracks-detection',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 1,
      title: 'AI-Powered Face Recognition System',
      description: 'A comprehensive real-time face detection and recognition system using deep learning technologies. Built for automated attendance tracking and security applications with high accuracy and performance.',
      longDescription: 'This advanced computer vision system leverages state-of-the-art deep learning models to provide real-time face detection and recognition capabilities. The system can handle multiple faces simultaneously, works in various lighting conditions, and includes features like anti-spoofing and liveness detection.',
      image: '/assets/face-detection-project/4.webp',
      images: [
        '/assets/face-detection-project/1.jpg',
        '/assets/face-detection-project/2.jpg',
        '/assets/face-detection-project/3.jpg',
        '/assets/face-detection-project/4.webp'
      ],
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
      image: '/assets/traffice-monitoring-project/1.jpg',
      images: [
        '/assets/traffice-monitoring-project/1.jpg'
      ],
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
      image: '/assets/portfolio-project/1.svg',
      images: [
        '/assets/portfolio-project/1.svg',
        '/assets/portfolio-project/2.svg',
        '/assets/portfolio-project/3.svg'
      ],
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
  image: '/assets/face-detection-project/4.webp',
  images: ['/assets/face-detection-project/4.webp'],
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
  image: '/assets/traffice-monitoring-project/1.jpg',
  images: ['/assets/traffice-monitoring-project/1.jpg'],
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
  image: '/assets/portfolio-project/1.svg',
  images: ['/assets/portfolio-project/1.svg'],
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

  const allProjects = projects

  // Slideshow Viewer State
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerProject, setViewerProject] = useState<any | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const openViewer = useCallback((project: any, startIndex = 0) => {
    setViewerProject(project)
    setSlideIndex(startIndex)
    setViewerOpen(true)
  }, [])

  const closeViewer = useCallback(() => {
    setViewerOpen(false)
    setTimeout(() => setViewerProject(null), 250)
  }, [])

  const projectImages = useMemo(() => {
    if (!viewerProject) return [] as string[]
    const imgs = viewerProject.images && Array.isArray(viewerProject.images) && viewerProject.images.length > 0
      ? viewerProject.images
      : viewerProject.image
        ? [viewerProject.image]
        : []
    return imgs
  }, [viewerProject])

  const nextSlide = useCallback(() => {
    if (projectImages.length === 0) return
    setSlideIndex((i) => (i + 1) % projectImages.length)
  }, [projectImages.length])

  const prevSlide = useCallback(() => {
    if (projectImages.length === 0) return
    setSlideIndex((i) => (i - 1 + projectImages.length) % projectImages.length)
  }, [projectImages.length])

  // Keyboard controls
  useEffect(() => {
    if (!viewerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeViewer()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [viewerOpen, closeViewer, nextSlide, prevSlide])

  return (
    <div className="min-h-screen pt-20 relative pb-20">
      {/* Optimized Squares Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Squares
          direction="up"
          speed={0.1}
          borderColor="rgba(59, 130, 246, 0.08)"
          squareSize={60}
          hoverFillColor="rgba(59, 130, 246, 0.03)"
          frameLimit={15}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-16 relative">
              
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

      {/* All Projects */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={openViewer} />
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
      {/* Modal Mount */}
      <ProjectViewerModal 
        open={viewerOpen}
        project={viewerProject}
        images={projectImages}
        index={slideIndex}
        onClose={closeViewer}
        onPrev={prevSlide}
        onNext={nextSlide}
        onJump={(i) => setSlideIndex(i)}
      />
    </div>
  )
}

function ProjectCard({ project, onOpen }: { project: any; onOpen: (p: any) => void }) {
  return (
    <div className="cursor-pointer" onClick={() => onOpen(project)}>
      <Card3D>
      <FeedbackCard 
        className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 overflow-hidden h-full"
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="bg-gradient-to-br from-primary-500/20 to-blue-500/20 w-full h-full flex items-center justify-center">
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
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-dark-800/20" />
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
        </div>
      </FeedbackCard>
  </Card3D>
  </div>
  )
}

// Fullscreen Project Viewer Modal
function ProjectViewerModal({
  open,
  project,
  images,
  index,
  onClose,
  onPrev,
  onNext,
  onJump
}: {
  open: boolean;
  project: any | null;
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
}) {
  if (!open || !project) return null
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Content */}
      <motion.div
        className="relative w-[95vw] max-w-6xl h-[85vh] bg-dark-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        initial={{ y: 20, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold">{project.title}</span>
            <span className="px-2 py-0.5 rounded bg-primary-500/20 text-primary-300 text-xs">{project.category}</span>
          </div>
          <button className="text-gray-300 hover:text-white px-3 py-1.5 rounded bg-white/5 hover:bg-white/10" onClick={onClose}>Close</button>
        </div>

        {/* Slideshow */}
        <div className="relative h-[calc(85vh-150px)] bg-black">
          {images.length > 0 ? (
            <img
              key={images[index]}
              src={images[index]}
              alt={`${project.title} - ${index + 1}`}
              className="absolute inset-0 w-full h-full object-contain"
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">No images available</div>
          )}

          {/* Controls */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center"
                onClick={onPrev}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center"
                onClick={onNext}
                aria-label="Next"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="p-4 border-t border-white/10 overflow-x-auto">
            <div className="flex gap-3">
              {images.map((src, i) => (
                <button key={src + i} className={`relative h-16 w-24 rounded overflow-hidden border ${i === index ? 'border-primary-500' : 'border-white/10'}`} onClick={() => onJump(i)}>
                  <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
                  {i === index && <span className="absolute inset-0 ring-2 ring-primary-500/60 pointer-events-none" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

// Mount the modal at the end of the page component render
// Note: We append it directly below in the file by returning an extra fragment.
