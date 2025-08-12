'use client'

import { FadeInUp, StaggerContainer, ScaleIn, HoverCard, RotateIn, BounceIn } from '../animations'
import { NeonGlow, MorphingShape, PulseEffect, GlitchEffect } from '../animations/SpecialEffects'
import { ScrollReveal, ParallaxContainer, StaggerReveal, FloatingElement } from '../ScrollAnimations'
import { motion, useScroll, useTransform } from 'framer-motion'

const TechStackSection = () => {
  const technologies = [
    {
      name: 'Python',
      icon: '🐍',
      category: 'Programming',
      proficiency: 95
    },
    {
      name: 'TensorFlow',
      icon: '🧠',
      category: 'AI/ML',
      proficiency: 90
    },
    {
      name: 'PyTorch',
      icon: '🔥',
      category: 'AI/ML',
      proficiency: 85
    },
    {
      name: 'OpenCV',
      icon: '👁️',
      category: 'Computer Vision',
      proficiency: 92
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      category: 'Programming',
      proficiency: 85
    },
    {
      name: 'React',
      icon: '⚛️',
      category: 'Frontend',
      proficiency: 80
    },
    {
      name: 'Next.js',
      icon: '🔺',
      category: 'Frontend',
      proficiency: 85
    },
    {
      name: 'Node.js',
      icon: '🟢',
      category: 'Backend',
      proficiency: 75
    },
    {
      name: 'Docker',
      icon: '🐳',
      category: 'DevOps',
      proficiency: 80
    },
    {
      name: 'AWS',
      icon: '☁️',
      category: 'Cloud',
      proficiency: 70
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      category: 'Database',
      proficiency: 75
    },
    {
      name: 'Git',
      icon: '📝',
      category: 'Tools',
      proficiency: 90
    }
  ]

  const categories = Array.from(new Set(technologies.map(tech => tech.category)))

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Modern Tech Stack</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Technologies and tools I use to build innovative solutions
            </p>
          </div>
        </FadeInUp>

        {/* Technology Grid */}
        <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <NeonGlow key={index} color={index % 2 === 0 ? "#3b82f6" : "#8b5cf6"}>
              <HoverCard
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 text-center relative overflow-hidden"
                hoverScale={1.08}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(225deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                      "linear-gradient(315deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))"
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-3 inline-block"
                    whileHover={{ 
                      rotate: [0, -15, 15, -15, 0],
                      scale: [1, 1.2, 1.1, 1.2, 1],
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-white mb-2"
                    whileHover={{ color: "#60a5fa" }}
                  >
                    {tech.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-primary-400 mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.category}
                  </motion.p>
                  
                  {/* Enhanced Proficiency Bar */}
                  <div className="w-full bg-dark-700 rounded-full h-3 mb-2 overflow-hidden relative">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <motion.div 
                      className="relative bg-gradient-to-r from-primary-500 to-blue-500 h-3 rounded-full shadow-lg"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                  <motion.span 
                    className="text-xs text-gray-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 1.5 }}
                  >
                    {tech.proficiency}%
                  </motion.span>
                </div>
              </HoverCard>
            </NeonGlow>
          ))}
        </StaggerContainer>

        {/* Categories Overview */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => {
            const categoryTechs = technologies.filter(tech => tech.category === category)
            const avgProficiency = Math.round(
              categoryTechs.reduce((sum, tech) => sum + tech.proficiency, 0) / categoryTechs.length
            )
            
            return (
              <BounceIn key={index} delay={index * 0.1}>
                <PulseEffect>
                  <motion.div
                    className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/20 text-center relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.08,
                      backgroundColor: "rgba(59, 130, 246, 0.15)",
                      borderColor: "rgba(59, 130, 246, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated Background Particles */}
                    <motion.div
                      className="absolute top-0 left-0 w-2 h-2 bg-primary-400 rounded-full"
                      animate={{
                        x: [0, 60, 0],
                        y: [0, 40, 0],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    
                    <motion.h4 
                      className="text-sm font-semibold text-primary-400 mb-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      {category}
                    </motion.h4>
                    <p className="text-xs text-gray-400">{categoryTechs.length} tools</p>
                    <motion.div 
                      className="text-lg font-bold text-white mt-2"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.2,
                        color: "#60a5fa",
                        textShadow: "0 0 10px rgba(96, 165, 250, 0.5)"
                      }}
                    >
                      {avgProficiency}%
                    </motion.div>
                  </motion.div>
                </PulseEffect>
              </BounceIn>
            )
          })}
        </StaggerContainer>

        {/* Code Showcase Preview */}
        <ScaleIn delay={0.5}>
          <GlitchEffect>
            <div className="mt-16 p-8 rounded-2xl bg-dark-800/50 border border-white/10 relative overflow-hidden">
              {/* Animated Background Grid */}
              <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px"
                }}
                animate={{
                  backgroundPosition: ["0px 0px", "20px 20px"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <FadeInUp delay={0.6}>
                <h3 className="text-2xl font-bold text-white mb-6 text-center relative z-10">
                  Code <span className="gradient-text">Showcase</span>
                </h3>
              </FadeInUp>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                <motion.div 
                  className="code-block group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex items-center justify-between mb-4 p-3 bg-dark-700/50 rounded-t-lg"
                    whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                  >
                    <motion.span 
                      className="text-primary-400 text-sm font-medium"
                      whileHover={{ color: "#60a5fa" }}
                    >
                      Computer Vision
                    </motion.span>
                    <span className="text-xs text-gray-400">Python • OpenCV</span>
                    <motion.div
                      className="flex space-x-1"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="bg-dark-900/50 p-4 rounded-b-lg relative overflow-hidden"
                    whileHover={{
                      boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <motion.pre 
                      className="text-sm text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
{`import cv2
import numpy as np

def detect_objects(image_path):
    """Real-time object detection"""
    net = cv2.dnn.readNet('yolo.weights')
    image = cv2.imread(image_path)
    
    # Process image
    blob = cv2.dnn.blobFromImage(
        image, 0.00392, (416, 416), 
        (0, 0, 0), True, crop=False
    )
    
    net.setInput(blob)
    outputs = net.forward()
    
    return process_outputs(outputs)`}
                    </motion.pre>
                    
                    {/* Typing Cursor Effect */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-2 h-4 bg-primary-400"
                      animate={{
                        opacity: [1, 0, 1]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="code-block group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex items-center justify-between mb-4 p-3 bg-dark-700/50 rounded-t-lg"
                    whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                  >
                    <motion.span 
                      className="text-primary-400 text-sm font-medium"
                      whileHover={{ color: "#60a5fa" }}
                    >
                      AI Model Training
                    </motion.span>
                    <span className="text-xs text-gray-400">Python • TensorFlow</span>
                    <motion.div
                      className="flex space-x-1"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="bg-dark-900/50 p-4 rounded-b-lg relative overflow-hidden"
                    whileHover={{
                      boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <motion.pre 
                      className="text-sm text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
{`import tensorflow as tf
from tensorflow.keras import layers

def build_cnn_model(input_shape, num_classes):
    """Build CNN for image classification"""
    model = tf.keras.Sequential([
        layers.Conv2D(32, 3, activation='relu'),
        layers.MaxPooling2D(),
        layers.Conv2D(64, 3, activation='relu'),
        layers.MaxPooling2D(),
        layers.Flatten(),
        layers.Dense(64, activation='relu'),
        layers.Dense(num_classes, activation='softmax')
    ])
    
    return model`}
                    </motion.pre>
                    
                    {/* Typing Cursor Effect */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-2 h-4 bg-primary-400"
                      animate={{
                        opacity: [1, 0, 1]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Floating Code Elements */}
              <motion.div
                className="absolute top-4 right-4 text-primary-400/20 text-6xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {`</>`}
              </motion.div>
            </div>
          </GlitchEffect>
        </ScaleIn>
      </div>
    </section>
  )
}

export default TechStackSection
