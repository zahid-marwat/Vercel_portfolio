'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState, useEffect } from 'react'

// Morphing Shape Component
export const MorphingShape = ({ 
  shapes = ["circle", "square", "triangle", "hexagon"],
  size = 100,
  className = ""
}: {
  shapes?: string[]
  size?: number
  className?: string
}) => {
  const [currentShape, setCurrentShape] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [shapes.length])

  const getClipPath = (shape: string) => {
    switch (shape) {
      case "circle":
        return "circle(50% at 50% 50%)"
      case "square":
        return "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      case "triangle":
        return "polygon(50% 0%, 0% 100%, 100% 100%)"
      case "hexagon":
        return "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
      case "star":
        return "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
      default:
        return "circle(50% at 50% 50%)"
    }
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="w-full h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500"
        animate={{
          clipPath: getClipPath(shapes[currentShape]),
          rotate: [0, 180, 360],
        }}
        transition={{
          clipPath: { duration: 1, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "linear" }
        }}
      />
    </motion.div>
  )
}

// Morphing Text
export const MorphingText = ({ 
  texts,
  className = ""
}: {
  texts: string[]
  className?: string
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -50, opacity: 0, scale: 1.2 }}
          transition={{ 
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

// Liquid Morphing Background
export const LiquidMorph = ({ 
  colors = ["#3b82f6", "#8b5cf6", "#ec4899"],
  className = ""
}: {
  colors?: string[]
  className?: string
}) => {
  const [currentColor, setCurrentColor] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [colors.length])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(circle at 30% 40%, ${colors[currentColor]}40 0%, transparent 50%), 
                      radial-gradient(circle at 80% 20%, ${colors[(currentColor + 1) % colors.length]}30 0%, transparent 50%), 
                      radial-gradient(circle at 40% 80%, ${colors[(currentColor + 2) % colors.length]}20 0%, transparent 50%)`,
          filter: "blur(40px)",
        }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      
      {/* Animated blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-30"
          style={{
            background: colors[(currentColor + i) % colors.length],
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          initial={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
        />
      ))}
    </div>
  )
}

// Icon Morphing Animation
export const MorphingIcon = ({ 
  icons,
  size = 24,
  className = ""
}: {
  icons: ReactNode[]
  size?: number
  className?: string
}) => {
  const [currentIcon, setCurrentIcon] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [icons.length])

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIcon}
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 180, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {icons[currentIcon]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Path Morphing (SVG)
export const MorphingPath = ({ 
  paths,
  size = 100,
  className = ""
}: {
  paths: string[]
  size?: number
  className?: string
}) => {
  const [currentPath, setCurrentPath] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPath((prev) => (prev + 1) % paths.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [paths.length])

  return (
    <svg width={size} height={size} className={className} viewBox="0 0 100 100">
      <motion.path
        d={paths[currentPath]}
        fill="none"
        stroke="url(#morphGradient)"
        strokeWidth="2"
        animate={{ d: paths[currentPath] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Jellyfish Morphing Animation
export const MorphingJellyfish = ({ 
  size = 120,
  className = ""
}: {
  size?: number
  className?: string
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Jellyfish body */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        style={{
          width: size * 0.8,
          height: size * 0.5,
        }}
        animate={{
          borderRadius: ["50% 50% 40% 40%", "50% 50% 60% 60%", "50% 50% 40% 40%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-blue-400 to-purple-600 opacity-80" />
      </motion.div>
      
      {/* Jellyfish tentacles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-b from-purple-400 to-transparent opacity-60"
          style={{
            width: 3,
            height: size * 0.7,
            left: `${30 + i * 8}%`,
            top: `${size * 0.4}px`,
            transformOrigin: "top center"
          }}
          animate={{
            scaleY: [1, 0.8, 1.2, 1],
            x: [0, Math.sin(i) * 10, 0],
            rotate: [0, Math.sin(i) * 10, 0],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        />
      ))}
    </motion.div>
  )
}
