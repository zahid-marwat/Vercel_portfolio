'use client'

import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'

interface Card3DProps {
  children: ReactNode
  className?: string
}

// 3D Card with perspective and depth
export const Card3D = ({ children, className = "" }: Card3DProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d"
      }}
      className={`perspective-1000 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d"
        }}
        className="relative"
      >
        {children}
        {/* 3D Shadow */}
        <motion.div
          className="absolute inset-0 bg-black/20 blur-xl rounded-lg"
          style={{
            transform: "translateZ(-75px) scale(0.9)"
          }}
        />
      </motion.div>
    </motion.div>
  )
}

// 3D Diamond Animation
export const Diamond3D = ({ size = 100, color = "#3b82f6" }: { size?: number, color?: string }) => {
  return (
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d"
      }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 360]
      }}
      transition={{
        duration: 10,
        ease: "linear"
      }}
    >
      {/* Diamond faces */}
      {[0, 90, 180, 270].map((rotation, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(45deg, ${color}66, ${color}cc)`,
            transformOrigin: "center",
            transform: `rotateY(${rotation}deg) translateZ(${size/4}px)`,
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          }}
        />
      ))}
    </motion.div>
  )
}

// 3D Floating Element
export const Float3D = ({ 
  children, 
  intensity = 20,
  className = "" 
}: { 
  children: ReactNode
  intensity?: number
  className?: string
}) => {
  return (
    <motion.div
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      animate={{
        y: [-intensity, intensity, -intensity],
        rotateX: [-5, 5, -5],
        rotateY: [-3, 3, -3]
      }}
      transition={{
        duration: 6,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// 3D Cube Animation
export const Cube3D = ({ size = 80 }: { size?: number }) => {
  const faces = [
    { transform: `rotateY(0deg) translateZ(${size/2}px)`, bg: "from-blue-500 to-purple-500" },
    { transform: `rotateY(90deg) translateZ(${size/2}px)`, bg: "from-purple-500 to-pink-500" },
    { transform: `rotateY(180deg) translateZ(${size/2}px)`, bg: "from-pink-500 to-red-500" },
    { transform: `rotateY(270deg) translateZ(${size/2}px)`, bg: "from-red-500 to-orange-500" },
    { transform: `rotateX(90deg) translateZ(${size/2}px)`, bg: "from-orange-500 to-yellow-500" },
    { transform: `rotateX(-90deg) translateZ(${size/2}px)`, bg: "from-yellow-500 to-blue-500" },
  ]

  return (
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d"
      }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360]
      }}
      transition={{
        duration: 8,
        ease: "linear"
      }}
    >
      {faces.map((face, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 bg-gradient-to-br ${face.bg} opacity-80 border border-white/20`}
          style={{ transform: face.transform }}
        />
      ))}
    </motion.div>
  )
}

// 3D Text Effect
export const Text3D = ({ 
  text, 
  className = "",
  depth = 5 
}: { 
  text: string
  className?: string
  depth?: number
}) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{
        rotateX: 15,
        rotateY: 15
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Main text */}
      <motion.span className="relative z-10 bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
        {text}
      </motion.span>
      
      {/* 3D depth layers */}
      {Array.from({ length: depth }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute top-0 left-0 text-primary-500/20"
          style={{
            transform: `translateZ(-${(i + 1) * 2}px) translateX(${i + 1}px) translateY(${i + 1}px)`
          }}
        >
          {text}
        </motion.span>
      ))}
    </motion.div>
  )
}

// 3D Button with depth
export const Button3D = ({ 
  children, 
  onClick,
  className = "" 
}: { 
  children: ReactNode
  onClick?: () => void
  className?: string
}) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <motion.button
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
      animate={{
        rotateX: isPressed ? 5 : 0,
        translateZ: isPressed ? -10 : 0
      }}
      whileHover={{
        translateZ: 10,
        rotateX: -5
      }}
      transition={{ duration: 0.1 }}
    >
      {/* Button face */}
      <motion.div
        className="relative z-10 px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg text-white font-semibold"
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </motion.div>
      
      {/* Button sides for 3D effect */}
      <motion.div
        className="absolute inset-0 bg-primary-700 rounded-lg"
        style={{ transform: "translateZ(0px)" }}
      />
      
      {/* Button shadow */}
      <motion.div
        className="absolute inset-0 bg-black/30 rounded-lg blur-md"
        style={{ 
          transform: "translateZ(-30px) scale(1.1)"
        }}
      />
    </motion.button>
  )
}
