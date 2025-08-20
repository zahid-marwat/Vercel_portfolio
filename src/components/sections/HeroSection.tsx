'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { FadeInUp, SlideInLeft, SlideInRight, ScaleIn, FloatingElement } from '../animations'
import { ScrollReveal, ParallaxContainer, TextRevealScroll } from '../ScrollAnimations'
import { Card3D, Diamond3D, Float3D, Text3D, Button3D } from '../animations/3DEffects'
import { MorphingShape, LiquidMorph, MorphingText } from '../animations/MorphingEffects'


const HeroSection = () => {
  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Computer Vision Engineer',
    'AI/ML Enthusiast',
    'Full-Stack Developer',
    'Problem Solver'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, textIndex, texts])

  const socialLinks = [
    {
      href: 'https://github.com/zahid-marwat',
      icon: Github,
      label: 'GitHub'
    },
    {
      href: 'https://linkedin.com/in/zahid4830513',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://twitter.com/zahid89782667',
      icon: Twitter,
      label: 'Twitter'
    },
    {
      href: 'mailto:fbpzahid4830@gmail.com',
      icon: Mail,
      label: 'Email'
    }
  ]

  const { scrollYProgress } = useScroll()
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -100])
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center pt-16 pb-8 relative overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Enhanced Background with Parallax */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: yBackground }}
      >
        {/* GitHub-style floating background elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-500/5 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: yText }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <SlideInLeft className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <FadeInUp delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold flex flex-wrap items-center justify-center lg:justify-start">
                  <Text3D text="Hi, I'm " className="mr-4" depth={3} />
                  <Text3D 
                    text="Zahid" 
                    className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400"
                    depth={5}
                  />
                </h1>
              </FadeInUp>
              <FadeInUp delay={0.4}>
                <div className="h-12 md:h-16">
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-300">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.6}>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
                  Building innovative AI solutions and scalable architectures that drive 
                  business transformation. Specializing in computer vision, machine learning, 
                  and full-stack development.
                </p>
              </FadeInUp>
            </div>

            {/* Enhanced 3D CTA Buttons */}
            <FadeInUp delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button3D 
                  onClick={() => {
                    const element = document.getElementById('projects')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="group"
                  data-cursor-text="See my amazing projects!"
                  data-cursor-variant="pointer"
                >
                  <div className="flex items-center space-x-2">
                    <span>View My Work</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </Button3D>
                
                <Button3D 
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/assets/Zahid_Marwat_CV.pdf'
                    link.download = 'Zahid_Marwat_CV.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
                  data-cursor-text="Download my resume"
                  data-cursor-variant="grab"
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Download className="w-5 h-5" />
                    </motion.div>
                    <span>Download CV</span>
                  </div>
                </Button3D>
              </div>
            </FadeInUp>

            {/* Social Links */}
            <FadeInUp delay={1.0}>
              <div className="flex space-x-6 justify-center lg:justify-start">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.div
                      key={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/5 hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/30 rounded-full flex items-center justify-center transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </FadeInUp>

            {/* Stats */}
            <FadeInUp delay={1.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '3+', label: 'Years Experience' },
                  { number: '25+', label: 'Happy Clients' },
                  { number: '15+', label: 'Certifications' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary-400">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </SlideInLeft>

          {/* Profile Image */}
          <SlideInRight className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-full blur-3xl scale-110"
                animate={{
                  scale: [1.1, 1.2, 1.1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile Image Container */}
              <ScaleIn delay={0.3}>
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
                  <motion.div
                    className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-blue-500 p-1"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full rounded-full bg-dark-900 p-4">
                      <div className="w-full h-full rounded-full overflow-hidden">
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
                  </motion.div>
                </div>
              </ScaleIn>

              {/* Enhanced 3D Floating Elements */}
              <Float3D intensity={30} className="absolute -top-8 -right-8">
                <Card3D className="w-24 h-24 bg-primary-500/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Diamond3D size={40} color="#3b82f6" />
                </Card3D>
              </Float3D>
              
              <Float3D intensity={25} className="absolute -bottom-6 -left-6">
                <Card3D className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MorphingShape size={60} shapes={["circle", "hexagon", "star"]} />
                </Card3D>
              </Float3D>
              
              <Float3D intensity={20} className="absolute top-1/4 -left-10">
                <Card3D className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MorphingText 
                    texts={["🎯", "⚡", "🚀", "💡"]} 
                    className="text-2xl h-8 w-8 flex items-center justify-center"
                  />
                </Card3D>
              </Float3D>
              
              {/* Additional 3D elements */}
              <Float3D intensity={15} className="absolute bottom-1/3 -right-6">
                <div className="w-12 h-12">
                  <Diamond3D size={48} color="#8b5cf6" />
                </div>
              </Float3D>
              
              {/* Liquid morphing background */}
              <div className="absolute inset-0 -z-10 opacity-30">
                <LiquidMorph 
                  colors={["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"]}
                  className="w-full h-full"
                />
              </div>
            </div>
          </SlideInRight>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/40 rounded-full mt-2"
              animate={{
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
