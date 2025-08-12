'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 30))
      const newParticles: Particle[] = []

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        })
      }

      setParticles(newParticles)
    }

    createParticles()

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary-400"
          style={{
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity
          }}
          initial={{
            x: particle.x,
            y: particle.y
          }}
          animate={{
            x: [
              particle.x,
              particle.x + particle.speedX * 100,
              particle.x + particle.speedX * 200,
              particle.x
            ],
            y: [
              particle.y,
              particle.y + particle.speedY * 100,
              particle.y + particle.speedY * 200,
              particle.y
            ],
            opacity: [
              particle.opacity,
              particle.opacity * 0.3,
              particle.opacity * 0.7,
              particle.opacity
            ]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/50 via-transparent to-dark-900/50" />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 border border-primary-500/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-16 h-16 border border-blue-500/20"
        animate={{
          rotate: [0, -360],
          scale: [1, 0.8, 1],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-12 h-12 border border-purple-500/20 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default ParticleBackground
