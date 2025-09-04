'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

// Fade In Up Animation
export const FadeInUp = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Fade In Down Animation
export const FadeInDown = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide In Left Animation
export const SlideInLeft = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide In Right Animation
export const SlideInRight = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Scale In Animation
export const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Rotate In Animation
export const RotateIn = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Stagger Container Animation
export const StaggerContainer = ({ 
  children, 
  delay = 0, 
  staggerDelay = 0.1, 
  className = '',
  ...props 
}: AnimationProps & { staggerDelay?: number }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Stagger Item Animation
export const StaggerItem = ({ 
  children, 
  className = '',
  ...props 
}: Omit<AnimationProps, 'delay' | 'duration'>) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Floating Element Animation
export const FloatingElement = ({ 
  children, 
  delay = 0, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0]
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: {
          duration: 3,
          ease: "easeInOut",
          delay: delay + 0.6
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Bounce In Animation
export const BounceIn = ({ 
  children, 
  delay = 0, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
        delay
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Reveal Animation (for text or content)
export const RevealAnimation = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay: delay + 0.1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Hover Card Animation
export const HoverCard = ({ 
  children, 
  className = '',
  hoverScale = 1.05,
  ...props 
}: AnimationProps & { hoverScale?: number }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Magnetic Button Animation
export const MagneticButton = ({ 
  children, 
  className = '',
  ...props 
}: AnimationProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
