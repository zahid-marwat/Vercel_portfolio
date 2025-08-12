'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 transform-gpu z-50"
      style={{ 
        scaleX,
        transformOrigin: "0%"
      }}
    />
  )
}

export default ScrollProgress
