'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, ChevronLeft, ChevronRight, Eye, Code, Brain, Monitor, Database, Camera } from 'lucide-react'
import { FadeInUp } from '../animations'
import { Card3D } from '../animations/3DEffects'
import { FeedbackCard } from '../animations/VisualFeedback'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsSection = () => {
  const [projectIndex, setProjectIndex] = useState(0)

  const projects = [
    {
      id: 8,
      title: 'Smart-Annotator',
      description: 'A desktop React + Electron tool with a Flask backend for efficient image quality control and annotation review.',
      longDescription: 'Smart-Annotator is a cross-platform desktop application built with React and Electron, featuring a Flask backend for robust image annotation quality control. It supports both detection (XML) and segmentation (JSON/LabelMe) formats, per-object attributes, auto-save, and a polished reviewing experience.',
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
      featured: true,
      features: [
        'Per-object attributes (JSON + XML) with isolated updates',
        'Electron-first save paths with backend fallback',
        'Auto-save and unified Ctrl+S for geometry and attributes',
        'Interactive canvas with polygons, bounding boxes, zoom/pan'
      ],
      githubUrl: 'https://github.com/zahid-marwat/smart-annotator',
      liveUrl: '',
      year: '2025',
      status: 'Completed'
    },
    {
      id: 0,
      title: 'Road Assets Condition Index',
      description: 'Detects roadside assets, determines their Asset Condition Index (ACI), location, and performs object detection and condition assessment.',
      longDescription: 'A computer vision solution for smart infrastructure management. The system automatically detects various roadside assets (signs, barriers, lights, etc.), estimates their location using GPS metadata, and computes an Asset Condition Index (ACI) based on visual analysis.',
      image: '/assets/road-assets-aci/1.jpg',
      images: [
        '/assets/road-assets-aci/1.jpg',
        '/assets/road-assets-aci/2.jpg',
        '/assets/road-assets-aci/3.jpg',
        '/assets/road-assets-aci/4.jpg',
        '/assets/road-assets-aci/5.jpg',
        '/assets/road-assets-aci/6.jpg',
        '/assets/road-assets-aci/7.jpg',
        '/assets/road-assets-aci/8.jpg'
      ],
      technologies: ['Python', 'YOLO', 'OpenCV', 'FastAPI', 'GeoPandas', 'TensorFlow', 'Docker'],
      category: 'Computer Vision',
      featured: true,
      features: [
        'Roadside asset detection (signs, barriers, lights)',
        'Asset Condition Index (ACI) visual calculation',
        'GPS-based location tagging and mapping',
        'Condition assessment using deep learning'
      ],
      githubUrl: 'https://github.com/zahid-marwat/road-assets-condition-index',
      liveUrl: 'https://road-assets-aci-demo.vercel.app',
      year: '2025',
      status: 'Completed'
    },
    {
      id: 7,
      title: 'Road Cracks Detection & PCI Assessment',
      description: 'Detects and categorizes road cracks, computes Pavement Condition Index (PCI), and recommends maintenance strategies.',
      longDescription: 'An AI-powered solution for automated road crack detection and classification using computer vision. The system analyzes road surface images, identifies crack types (longitudinal, transverse, alligator, etc.), calculates the Pavement Condition Index (PCI), and suggests optimal maintenance strategies.',
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
      technologies: ['Python', 'Faster RCNN', 'OpenCV', 'TensorFlow', 'FastAPI', 'YOLO'],
      category: 'Computer Vision',
      featured: true,
      features: [
        'Automated crack detection and classification',
        'PCI (Pavement Condition Index) scoring',
        'Maintenance strategy recommendation',
        'Detailed bill of quantities generation'
      ],
      githubUrl: 'https://github.com/zahid-marwat/road-cracks-detection',
      liveUrl: 'https://road-cracks-detection-demo.vercel.app',
      year: '2024',
      status: 'Completed'
    },
    {
      id: 1,
      title: 'AI-Powered Face Recognition System',
      description: 'Real-time face detection and recognition system using deep learning for automated attendance and security applications.',
      longDescription: 'This advanced computer vision system leverages state-of-the-art deep learning models to provide real-time face detection and recognition capabilities. Handles multiple faces simultaneously with anti-spoofing.',
      image: '/assets/face-detection-project/4.webp',
      images: [
        '/assets/face-detection-project/1.jpg',
        '/assets/face-detection-project/2.jpg',
        '/assets/face-detection-project/3.jpg',
        '/assets/face-detection-project/4.webp'
      ],
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'SQLite', 'dlib'],
      category: 'Computer Vision',
      featured: true,
      features: [
        'Real-time face detection with 99.2% accuracy',
        'Multi-face recognition and tracking',
        'Anti-spoofing and liveness detection',
        'Web-based admin dashboard'
      ],
      githubUrl: 'https://github.com/zahid-marwat/face-recognition-system',
      liveUrl: 'https://face-recognition-demo.vercel.app',
      year: '2023',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Intelligent Traffic Monitoring System',
      description: 'Intelligent traffic monitoring and analysis system using computer vision to detect vehicles, count traffic, and analyze patterns.',
      longDescription: 'An intelligent traffic monitoring system that uses YOLO object detection and computer vision techniques to analyze traffic patterns, count vehicles, estimate speeds, and provide real-time insights.',
      image: '/assets/traffice-monitoring-project/1.jpg',
      images: [
        '/assets/traffice-monitoring-project/1.jpg'
      ],
      technologies: ['Python', 'YOLO', 'OpenCV', 'FastAPI', 'PostgreSQL', 'Docker'],
      category: 'Computer Vision',
      featured: true,
      features: [
        'Real-time vehicle detection and classification',
        'Traffic density analysis and counting',
        'Speed estimation and monitoring',
        'License plate recognition (OCR)'
      ],
      githubUrl: 'https://github.com/zahid-marwat/traffic-monitoring-system',
      liveUrl: 'https://traffic-monitor-demo.vercel.app',
      year: '2023',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Modern Portfolio Website',
      description: 'Responsive portfolio website built with Next.js, featuring modern design, smooth animations, and optimized performance.',
      longDescription: 'A cutting-edge portfolio website showcasing modern web development practices with Next.js 14, TypeScript, Tailwind CSS, and advanced animations.',
      image: '/assets/portfolio-project/1.svg',
      images: [
        '/assets/portfolio-project/1.svg',
        '/assets/portfolio-project/2.svg',
        '/assets/portfolio-project/3.svg'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Development',
      featured: true,
      features: [
        'Modern responsive glassmorphic UI',
        '3D card tilt & smooth section scrolling',
        'SEO optimized with Next.js App Router',
        'Interactive slideshow & media gallery'
      ],
      githubUrl: 'https://github.com/zahid-marwat/portfolio-website',
      liveUrl: 'https://zahid-marwat.vercel.app',
      year: '2024',
      status: 'Live'
    },
    {
      id: 4,
      title: 'Medical Image Classification System',
      description: 'Deep learning-powered medical image classification system for automated diagnosis assistance.',
      longDescription: 'An advanced medical AI system that assists healthcare professionals in diagnosing medical conditions through automated image analysis using convolutional neural networks.',
      image: '',
      images: [],
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Flask', 'Docker'],
      category: 'AI & ML',
      featured: false,
      features: [
        'Medical image classification & segmentation',
        'Multi-class disease detection',
        'DICOM image support & confidence scoring'
      ],
      githubUrl: 'https://github.com/zahid-marwat/medical-image-classification',
      liveUrl: 'https://medical-ai-demo.vercel.app',
      year: '2023',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Real-time Object Detection API',
      description: 'High-performance REST API for real-time object detection using YOLO models.',
      longDescription: 'A robust API service providing real-time object detection capabilities using state-of-the-art YOLO models, designed for integration into various applications.',
      image: '',
      images: [],
      technologies: ['Python', 'FastAPI', 'YOLO', 'OpenCV', 'Redis', 'Docker'],
      category: 'AI & ML',
      featured: false,
      features: [
        'Real-time object detection endpoints',
        'Batch image processing with FastAPI',
        'Redis caching for inference speed'
      ],
      githubUrl: 'https://github.com/zahid-marwat/object-detection-api',
      liveUrl: 'https://object-detection-api.vercel.app',
      year: '2024',
      status: 'Live'
    },
    {
      id: 6,
      title: 'Data Analytics Dashboard',
      description: 'Interactive data visualization dashboard featuring real-time data updates and chart analytics.',
      longDescription: 'A comprehensive analytics dashboard that provides interactive data visualizations and advanced filtering capabilities for business intelligence applications.',
      image: '',
      images: [],
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js'],
      category: 'Web Development',
      featured: false,
      features: [
        'Interactive data visualizations with D3.js',
        'Real-time data streaming',
        'Advanced filtering and chart exports'
      ],
      githubUrl: 'https://github.com/zahid-marwat/analytics-dashboard',
      liveUrl: 'https://analytics-dashboard-demo.vercel.app',
      year: '2022',
      status: 'Completed'
    }
  ]

  const categories = ['All', 'Computer Vision', 'AI & ML', 'Web Development', 'Desktop Application']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects
    return projects.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  const totalProjects = filteredProjects.length || 1

  const nextProject = useCallback(() => {
    setProjectIndex((prev) => (prev + 1) % totalProjects)
  }, [totalProjects])

  const prevProject = useCallback(() => {
    setProjectIndex((prev) => (prev - 1 + totalProjects) % totalProjects)
  }, [totalProjects])

  // Mathematically safe non-negative index calculation
  const safeActiveIndex = ((projectIndex % totalProjects) + totalProjects) % totalProjects
  const currentProject = filteredProjects[safeActiveIndex] || filteredProjects[0]

  // Fullscreen Modal Viewer State
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerProject, setViewerProject] = useState<any | null>(null)
  const [modalSlideIndex, setModalSlideIndex] = useState(0)

  const openViewer = useCallback((proj: any, startIndex = 0) => {
    setViewerProject(proj)
    setModalSlideIndex(startIndex)
    setViewerOpen(true)
  }, [])

  const closeViewer = useCallback(() => {
    setViewerOpen(false)
    setTimeout(() => setViewerProject(null), 250)
  }, [])

  const modalImages = useMemo(() => {
    if (!viewerProject) return [] as string[]
    return viewerProject.images && viewerProject.images.length > 0
      ? viewerProject.images
      : viewerProject.image
        ? [viewerProject.image]
        : []
  }, [viewerProject])

  const nextModalSlide = useCallback(() => {
    if (modalImages.length === 0) return
    setModalSlideIndex((i) => (i + 1) % modalImages.length)
  }, [modalImages.length])

  const prevModalSlide = useCallback(() => {
    if (modalImages.length === 0) return
    setModalSlideIndex((i) => (i - 1 + modalImages.length) % modalImages.length)
  }, [modalImages.length])

  useEffect(() => {
    if (!viewerOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeViewer()
      if (e.key === 'ArrowRight') nextModalSlide()
      if (e.key === 'ArrowLeft') prevModalSlide()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [viewerOpen, closeViewer, nextModalSlide, prevModalSlide])

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Interactive portfolio of AI solutions, computer vision applications, and software tools.
            </p>
          </div>
        </FadeInUp>

        {/* Category Filters */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(cat)
                  setProjectIndex(0)
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white border-primary-400 shadow-lg scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Navigation Control Bar */}
        <div className="flex items-center justify-between max-w-3xl mx-auto mb-6">
          <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Project {safeActiveIndex + 1} of {filteredProjects.length}
          </span>

          <div className="flex items-center space-x-3">
            <button
              onClick={prevProject}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500/30 border border-white/20 hover:border-primary-400 flex items-center justify-center text-white transition-all shadow-md active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500/30 border border-white/20 hover:border-primary-400 flex items-center justify-center text-white transition-all shadow-md active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Single Object Slide Stage with Touch Swipe / Drag */}
        <div className="max-w-3xl mx-auto relative p-4 md:p-8 overflow-visible">
          {currentProject && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentProject.id}-${safeActiveIndex}`}
                className="w-full cursor-grab active:cursor-grabbing"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -50 || velocity.x < -300) nextProject()
                  else if (offset.x > 50 || velocity.x > 300) prevProject()
                }}
              >
                <Card3D className="w-full">
                  <FeedbackCard className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 flex flex-col justify-between">
                    <div onClick={() => openViewer(currentProject)}>
                      {/* Project Image Stage */}
                      <div className="relative h-64 md:h-80 overflow-hidden bg-dark-800/80 rounded-t-2xl">
                        {currentProject.image ? (
                          <img
                            src={currentProject.image}
                            alt={currentProject.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-blue-500/20 w-full h-full flex flex-col items-center justify-center p-6 text-center">
                            {currentProject.category === 'AI & ML' ? (
                              <Brain className="w-16 h-16 text-primary-400 mb-3 animate-pulse" />
                            ) : currentProject.category === 'Desktop Application' ? (
                              <Monitor className="w-16 h-16 text-blue-400 mb-3" />
                            ) : currentProject.category === 'Web Development' ? (
                              <Code className="w-16 h-16 text-purple-400 mb-3" />
                            ) : (
                              <Camera className="w-16 h-16 text-cyan-400 mb-3" />
                            )}
                            <h4 className="text-xl font-bold text-white mb-1">{currentProject.title}</h4>
                            <span className="text-primary-300 font-semibold text-sm">{currentProject.category}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-dark-900/30 group-hover:bg-dark-900/10 transition-colors" />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-3 py-1 bg-dark-900/80 backdrop-blur-md rounded-full text-xs text-primary-300 font-semibold border border-white/10">
                            {currentProject.category}
                          </span>
                        </div>

                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-dark-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gray-300 border border-white/10">
                          <Eye className="w-3.5 h-3.5 text-primary-400" />
                          <span>{currentProject.images?.length || 1} shots</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors flex-1 pr-3">
                            {currentProject.title}
                          </h3>
                          <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded border border-white/10 flex-shrink-0">
                            {currentProject.year}
                          </span>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                          {currentProject.longDescription || currentProject.description}
                        </p>

                        <div className="mb-6">
                          <span className="text-xs font-semibold text-gray-400 block mb-2">Key Features:</span>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {currentProject.features.map((feat: string, fIdx: number) => (
                              <li key={fIdx} className="text-xs text-gray-300 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0"></span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.map((tech: string, tIdx: number) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 bg-primary-500/15 text-primary-300 rounded-full text-xs font-medium border border-primary-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="p-4 md:p-6 bg-white/[0.02] border-t border-white/10 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => openViewer(currentProject)}
                        className="inline-flex items-center space-x-2 text-sm text-primary-400 hover:text-primary-300 font-semibold"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Screenshots</span>
                      </button>

                      <div className="flex items-center space-x-3">
                        {currentProject.githubUrl && (
                          <Link
                            href={currentProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-5 h-5" />
                          </Link>
                        )}
                        {currentProject.liveUrl && (
                          <Link
                            href={currentProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </FeedbackCard>
                </Card3D>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setProjectIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === safeActiveIndex ? 'w-8 bg-primary-400' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Fullscreen Project Viewer Modal */}
      <ProjectViewerModal
        open={viewerOpen}
        project={viewerProject}
        images={modalImages}
        index={modalSlideIndex}
        onClose={closeViewer}
        onPrev={prevModalSlide}
        onNext={nextModalSlide}
        onJump={(i) => setModalSlideIndex(i)}
      />
    </section>
  )
}

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
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

        <motion.div
          className="relative w-full max-w-5xl h-[85vh] bg-dark-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between"
          initial={{ y: 20, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-dark-900/90 backdrop-blur-md z-10">
            <div className="flex items-center gap-3">
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </Link>
              )}
              <button
                className="text-gray-300 hover:text-white px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs font-semibold"
                onClick={onClose}
              >
                Close ✕
              </button>
            </div>
          </div>

          {/* Stage */}
          <div className="relative flex-1 bg-black/90 flex items-center justify-center overflow-hidden">
            {images.length > 0 ? (
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-full object-contain p-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <div className="text-gray-400 text-sm">No preview image available</div>
            )}

            {/* Controls */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary-500 text-white rounded-full w-11 h-11 flex items-center justify-center border border-white/20 transition-all"
                  onClick={onPrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary-500 text-white rounded-full w-11 h-11 flex items-center justify-center border border-white/20 transition-all"
                  onClick={onNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}

            {/* Counter */}
            {images.length > 0 && (
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">
                {index + 1} / {images.length}
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="p-3 border-t border-white/10 bg-dark-900/90 overflow-x-auto">
              <div className="flex justify-center gap-3">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    className={`relative h-14 w-20 rounded-lg overflow-hidden border transition-all ${
                      i === index ? 'border-primary-400 ring-2 ring-primary-500/50 scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => onJump(i)}
                  >
                    <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectsSection
