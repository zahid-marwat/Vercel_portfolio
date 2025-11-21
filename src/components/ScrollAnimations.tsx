'use client'

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

interface ScrollScaleProps {
  children: ReactNode
  className?: string
}

// GitHub-style scroll reveal animation
export const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = ""
}: ScrollRevealProps) => {
  const { scrollYProgress } = useScroll()

  const shouldReduceMotion = useReducedMotion()

  const getInitialTransform = () => {
    if (shouldReduceMotion) return { opacity: 0 }

    switch (direction) {
      case 'up': return { y: 50, opacity: 0 } // Reduced distance
      case 'down': return { y: -50, opacity: 0 }
      case 'left': return { x: -50, opacity: 0 }
      case 'right': return { x: 50, opacity: 0 }
      default: return { y: 50, opacity: 0 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialTransform()}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] // GitHub's easing
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

// Parallax scrolling effect
export const ParallaxContainer = ({
  children,
  speed = 0.5,
  className = ""
}: ParallaxProps) => {
  const { scrollYProgress } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -speed * 100])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className={className}
      style={{ y: smoothY }}
    >
      {children}
    </motion.div>
  )
}

// Scale on scroll effect
export const ScrollScale = ({ children, className = "" }: ScrollScaleProps) => {
  const { scrollYProgress } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [shouldReduceMotion ? 1 : 0.8, 1, shouldReduceMotion ? 1 : 1.1])
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className={className}
      style={{ scale: smoothScale }}
      whileInView={{
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

// Stagger reveal for lists (GitHub-style)
interface StaggerRevealProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
}

export const StaggerReveal = ({
  children,
  className = "",
  staggerDelay = 0.1
}: StaggerRevealProps) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }} // Reduced distance
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: index * staggerDelay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// GitHub-style floating elements
export const FloatingElement = ({
  children,
  className = "",
  intensity = 20
}: {
  children: ReactNode
  className?: string
  intensity?: number
}) => {
  const { scrollYProgress } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : intensity])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 5])

  return (
    <motion.div
      className={className}
      style={{ y, rotate }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic scroll effect for elements
export const MagneticScroll = ({
  children,
  className = ""
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.02 }}
      whileInView={{
        scale: [0.95, 1],
        opacity: [0, 1],
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
    >
      {children}
    </motion.div>
  )
}

// Text reveal animation (GitHub-style)
export const TextRevealScroll = ({
  text,
  className = ""
}: {
  text: string
  className?: string
}) => {
  const words = text.split(' ')
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          viewport={{ once: true }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
