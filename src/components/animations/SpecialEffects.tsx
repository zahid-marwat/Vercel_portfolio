'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SpecialEffectProps {
  children: ReactNode
  className?: string
}

// Typewriter Effect Component
export const TypewriterEffect = ({ 
  text, 
  delay = 0, 
  speed = 50,
  className = '' 
}: { 
  text: string
  delay?: number
  speed?: number
  className?: string 
}) => {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{
        duration: text.length * (speed / 1000),
        delay,
        ease: "linear"
      }}
      className={`inline-block overflow-hidden whitespace-nowrap ${className}`}
    >
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  )
}

// Glitch Effect
export const GlitchEffect = ({ children, className = '' }: SpecialEffectProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        x: [0, -2, 2, -2, 0],
        transition: { duration: 0.2, repeat: 2 }
      }}
    >
      {children}
      <motion.div
        className="absolute inset-0 opacity-0"
        whileHover={{
          opacity: [0, 0.1, 0],
          x: [-2, 2, -2],
          transition: { duration: 0.1, repeat: 3 }
        }}
        style={{
          background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
          mixBlendMode: 'multiply'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Particle Effect Background
export const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-20"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
    />
  ))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles}
    </div>
  )
}

// Morphing Shape
export const MorphingShape = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`w-32 h-32 bg-gradient-to-r from-primary-500 to-blue-500 ${className}`}
      animate={{
        borderRadius: [
          "20% 80% 80% 20%",
          "80% 20% 20% 80%",
          "20% 80% 80% 20%"
        ],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

// Liquid Animation
export const LiquidAnimation = ({ children, className = '' }: SpecialEffectProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{
        scale: 1.02
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
            "linear-gradient(225deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
            "linear-gradient(315deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

// Neon Glow Effect
export const NeonGlow = ({ children, color = "#3b82f6", className = '' }: SpecialEffectProps & { color?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        filter: `drop-shadow(0 0 20px ${color})`
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0"
        whileHover={{ opacity: 0.3 }}
        style={{
          boxShadow: `inset 0 0 20px ${color}, 0 0 20px ${color}`
        }}
      />
      {children}
    </motion.div>
  )
}

// Pulse Effect
export const PulseEffect = ({ children, className = '' }: SpecialEffectProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Loading Spinner with Animation
export const AnimatedSpinner = ({ size = 40, color = "#3b82f6" }: { size?: number, color?: string }) => {
  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
    >
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-full"
        style={{
          borderTopColor: color,
          borderRightColor: color
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-2 border-2 border-transparent rounded-full"
        style={{
          borderBottomColor: color,
          borderLeftColor: color
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  )
}

// Text Reveal Animation
export const TextReveal = ({ text, className = '' }: { text: string, className?: string }) => {
  const words = text.split(' ')
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Parallax Effect
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = '' 
}: SpecialEffectProps & { speed?: number }) => {
  return (
    <motion.div
      className={className}
      style={{
        y: `${speed * 100}%`
      }}
      whileInView={{
        y: 0
      }}
      transition={{
        duration: 1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
