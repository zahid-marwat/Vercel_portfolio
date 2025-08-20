'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text' | 'pointer' | 'grab' | 'loading'>('default')
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([])
  const pathname = usePathname()
  
  // Use motion values for smoother performance (GitHub-style)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Spring animations for smooth following with different configs for different states
  const getSpringConfig = () => {
    switch (cursorVariant) {
      case 'text': return { damping: 30, stiffness: 200, mass: 0.1 }
      case 'pointer': return { damping: 20, stiffness: 300, mass: 0.05 }
      case 'grab': return { damping: 35, stiffness: 150, mass: 0.2 }
      case 'loading': return { damping: 40, stiffness: 100, mass: 0.3 }
      default: return { damping: 25, stiffness: 150, mass: 0.1 }
    }
  }
  
  const cursorXSpring = useSpring(cursorX, getSpringConfig())
  const cursorYSpring = useSpring(cursorY, getSpringConfig())

  // Handle route changes - clear cursor state when navigating between pages
  useEffect(() => {
    setIsHovering(false)
    setCursorText('')
    setCursorVariant('default')
  }, [pathname])

  // Auto-clear cursor text if it persists too long (safety net)
  useEffect(() => {
    if (cursorText) {
      const timeout = setTimeout(() => {
        setCursorText('')
        setCursorVariant('default')
        setIsHovering(false)
      }, 5000) // Clear after 5 seconds
      
      return () => clearTimeout(timeout)
    }
  }, [cursorText])

  useEffect(() => {
    let trailId = 0
    let currentElements: NodeListOf<Element> | null = null

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      
      // Add trail effect
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ }
      setTrails(prev => [...prev.slice(-8), newTrail]) // Keep last 8 trail points
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true)
      const target = e.target as HTMLElement
      
      // Enhanced cursor text detection
      const text = target.getAttribute('data-cursor-text')
      if (text) setCursorText(text)
      
      // Cursor variant detection
      const variant = target.getAttribute('data-cursor-variant') as typeof cursorVariant
      if (variant) setCursorVariant(variant)
      
      // Auto-detect cursor type based on element
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setCursorVariant('pointer')
      } else if (target.contentEditable === 'true' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorVariant('text')
      } else if (target.draggable) {
        setCursorVariant('grab')
      }
    }
    
    const handleMouseLeave = (e: Event) => {
      // Only clear if we're actually leaving the element
      const target = e.target as HTMLElement
      const relatedTarget = (e as MouseEvent).relatedTarget as HTMLElement
      
      // If moving to a child element, don't clear the cursor
      if (relatedTarget && target.contains(relatedTarget)) {
        return
      }
      
      setIsHovering(false)
      setCursorText('')
      setCursorVariant('default')
    }

    // Global mouse leave handler to clear cursor state when leaving any element
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check if we're not over any interactive element
      const isOverInteractive = target.closest(`
        a, button, input, textarea, select, 
        [data-cursor-text], [data-cursor-variant],
        [role="button"], .cursor-pointer, [onclick], 
        [draggable="true"], [contenteditable="true"]
      `)
      
      if (!isOverInteractive) {
        setIsHovering(false)
        setCursorText('')
        setCursorVariant('default')
      }
    }

    // Force clear cursor state when mouse moves away from any element
    const handleDocumentMouseLeave = () => {
      setIsHovering(false)
      setCursorText('')
      setCursorVariant('default')
    }

    const setupEventListeners = () => {
      // Remove old listeners first
      if (currentElements) {
        currentElements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter)
          element.removeEventListener('mouseleave', handleMouseLeave)
        })
      }

      // Enhanced interactive elements detection
      currentElements = document.querySelectorAll(`
        a, button, input, textarea, select, 
        [data-cursor-text], [data-cursor-variant],
        [role="button"], .cursor-pointer, [onclick], [tabindex],
        [draggable="true"], [contenteditable="true"]
      `)
      
      currentElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    // Initial setup
    setupEventListeners()

    // Re-setup listeners when DOM changes (for client-side navigation)
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldUpdate = true
        }
      })
      
      if (shouldUpdate) {
        // Debounce to avoid excessive updates
        setTimeout(setupEventListeners, 100)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Listen for route changes to clear cursor state
    const handleRouteChange = () => {
      setIsHovering(false)
      setCursorText('')
      setCursorVariant('default')
      // Re-setup listeners after route change
      setTimeout(setupEventListeners, 100)
    }

    // Listen for both popstate (back/forward) and any navigation
    window.addEventListener('popstate', handleRouteChange)
    
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mousemove', handleGlobalMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleDocumentMouseLeave)

    return () => {
      observer.disconnect()
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleDocumentMouseLeave)
      
      if (currentElements) {
        currentElements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter)
          element.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }
  }, [])

  const getCursorSize = () => {
    switch (cursorVariant) {
      case 'text': return { main: 2, trail: 1 }
      case 'pointer': return { main: 8, trail: 3 }
      case 'grab': return { main: 10, trail: 4 }
      case 'loading': return { main: 6, trail: 2 }
      default: return { main: 6, trail: 2 }
    }
  }

  const sizes = getCursorSize()

  return (
    <>
      {/* Trail Effect */}
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            className="fixed pointer-events-none z-40 rounded-full bg-primary-400/20"
            style={{
              width: sizes.trail * (index + 1) * 0.5,
              height: sizes.trail * (index + 1) * 0.5,
              left: trail.x - (sizes.trail * (index + 1) * 0.25),
              top: trail.y - (sizes.trail * (index + 1) * 0.25),
            }}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 + index * 0.1 }}
          />
        ))}
      </AnimatePresence>

      {/* Main cursor - Enhanced with variants */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: sizes.main * 4,
          height: sizes.main * 4,
        }}
        animate={{
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
          backgroundColor: 
            cursorVariant === 'text' ? 'rgba(236, 72, 153, 0.6)' :
            cursorVariant === 'pointer' ? 'rgba(34, 197, 94, 0.6)' :
            cursorVariant === 'grab' ? 'rgba(249, 115, 22, 0.6)' :
            cursorVariant === 'loading' ? 'rgba(168, 85, 247, 0.6)' :
            isHovering ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.3)',
          borderRadius: cursorVariant === 'text' ? '2px' : '50%',
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {/* Loading spinner for loading variant */}
        {cursorVariant === 'loading' && (
          <motion.div
            className="absolute inset-2 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.div>
      
      {/* Trailing cursor with variant-specific behavior */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: sizes.trail * 4,
          height: sizes.trail * 4,
        }}
        animate={{
          scale: isHovering ? 0 : isClicking ? 1.5 : 1,
          opacity: isClicking ? 0.8 : 0.6,
          backgroundColor: 
            cursorVariant === 'text' ? '#ec4899' :
            cursorVariant === 'pointer' ? '#22c55e' :
            cursorVariant === 'grab' ? '#f97316' :
            cursorVariant === 'loading' ? '#a855f7' :
            '#3b82f6'
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8
        }}
      />
      
      {/* Enhanced glow effect with variant colors */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-40 blur-sm"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: sizes.main * 8,
          height: sizes.main * 8,
        }}
        animate={{
          scale: isHovering ? 3 : isClicking ? 2 : 1,
          opacity: isHovering ? 0.8 : isClicking ? 0.6 : 0.3,
          backgroundColor: 
            cursorVariant === 'text' ? 'rgba(236, 72, 153, 0.2)' :
            cursorVariant === 'pointer' ? 'rgba(34, 197, 94, 0.2)' :
            cursorVariant === 'grab' ? 'rgba(249, 115, 22, 0.2)' :
            cursorVariant === 'loading' ? 'rgba(168, 85, 247, 0.2)' :
            isHovering ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25
        }}
      />

      {/* Enhanced cursor text with animations */}
      <AnimatePresence>
        {cursorText && (
          <motion.div
            className="fixed top-0 left-0 px-3 py-1 bg-black/90 backdrop-blur-sm text-white text-sm rounded-full pointer-events-none z-50 whitespace-nowrap border border-white/20"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: '-50%',
              translateY: '-150%'
            }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.div
              animate={{ 
                boxShadow: `0 0 20px ${
                  cursorVariant === 'text' ? 'rgba(236, 72, 153, 0.5)' :
                  cursorVariant === 'pointer' ? 'rgba(34, 197, 94, 0.5)' :
                  cursorVariant === 'grab' ? 'rgba(249, 115, 22, 0.5)' :
                  'rgba(59, 130, 246, 0.5)'
                }`
              }}
              className="flex items-center space-x-1"
            >
              {/* Icon based on variant */}
              {cursorVariant === 'pointer' && <span className="text-green-400">👆</span>}
              {cursorVariant === 'text' && <span className="text-pink-400">📝</span>}
              {cursorVariant === 'grab' && <span className="text-orange-400">✋</span>}
              {cursorVariant === 'loading' && (
                <motion.span 
                  className="text-purple-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ⏳
                </motion.span>
              )}
              <span>{cursorText}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced ripple effect on click with variant colors */}
      <AnimatePresence>
        {isClicking && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="fixed top-0 left-0 border-2 rounded-full pointer-events-none z-49"
                style={{
                  x: cursorXSpring,
                  y: cursorYSpring,
                  translateX: '-50%',
                  translateY: '-50%',
                  width: (12 + i * 8) * 2,
                  height: (12 + i * 8) * 2,
                  borderColor: 
                    cursorVariant === 'text' ? '#ec4899' :
                    cursorVariant === 'pointer' ? '#22c55e' :
                    cursorVariant === 'grab' ? '#f97316' :
                    cursorVariant === 'loading' ? '#a855f7' :
                    '#3b82f6'
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2 + i * 0.3, opacity: 0 }}
                transition={{ 
                  duration: 0.6 + i * 0.2, 
                  ease: "easeOut",
                  delay: i * 0.1
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Magnetic effect for special elements */}
      {cursorVariant === 'grab' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-48"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              animate={{
                x: Math.cos((i * Math.PI * 2) / 8) * 20,
                y: Math.sin((i * Math.PI * 2) / 8) * 20,
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  )
}

export default CustomCursor
