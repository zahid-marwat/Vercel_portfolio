'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// Basic Skeleton Loader
export const SkeletonLoader = ({ 
  width = "100%", 
  height = "20px",
  className = "",
  isLoading = true,
  children 
}: {
  width?: string | number
  height?: string | number
  className?: string
  isLoading?: boolean
  children?: ReactNode
}) => {
  if (!isLoading && children) {
    return <>{children}</>
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
        animate={{
          x: ["-100%", "100%"]
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut"
        }}
      />
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800" />
    </motion.div>
  )
}

// Card Skeleton
export const SkeletonCard = ({ 
  isLoading = true,
  children,
  className = ""
}: {
  isLoading?: boolean
  children?: ReactNode
  className?: string
}) => {
  if (!isLoading && children) {
    return <>{children}</>
  }

  return (
    <motion.div
      className={`p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <SkeletonLoader width={40} height={40} className="rounded-full" />
        <div className="flex-1 space-y-2">
          <SkeletonLoader width="60%" height={16} />
          <SkeletonLoader width="40%" height={12} />
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-3">
        <SkeletonLoader width="100%" height={14} />
        <SkeletonLoader width="90%" height={14} />
        <SkeletonLoader width="75%" height={14} />
      </div>
      
      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <SkeletonLoader width={80} height={32} className="rounded-full" />
        <SkeletonLoader width={100} height={32} className="rounded" />
      </div>
    </motion.div>
  )
}

// List Skeleton
export const SkeletonList = ({ 
  items = 5,
  isLoading = true,
  children,
  className = ""
}: {
  items?: number
  isLoading?: boolean
  children?: ReactNode
  className?: string
}) => {
  if (!isLoading && children) {
    return <>{children}</>
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <SkeletonLoader width={48} height={48} className="rounded-full" />
          <div className="flex-1 space-y-2">
            <SkeletonLoader width="70%" height={16} />
            <SkeletonLoader width="50%" height={12} />
          </div>
          <SkeletonLoader width={60} height={24} className="rounded" />
        </motion.div>
      ))}
    </div>
  )
}

// Text Skeleton
export const SkeletonText = ({ 
  lines = 3,
  isLoading = true,
  children,
  className = ""
}: {
  lines?: number
  isLoading?: boolean
  children?: ReactNode
  className?: string
}) => {
  if (!isLoading && children) {
    return <>{children}</>
  }

  const lineWidths = ["100%", "85%", "70%", "90%", "65%"]

  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <SkeletonLoader 
            width={lineWidths[index % lineWidths.length]} 
            height={16} 
          />
        </motion.div>
      ))}
    </div>
  )
}

// Image Skeleton
export const SkeletonImage = ({ 
  width = "100%",
  height = "200px",
  isLoading = true,
  children,
  className = ""
}: {
  width?: string | number
  height?: string | number
  isLoading?: boolean
  children?: ReactNode
  className?: string
}) => {
  if (!isLoading && children) {
    return <>{children}</>
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ["-100%", "100%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
      />
      
      {/* Placeholder icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 text-gray-400"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2 }}
        >
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Navigation Skeleton
export const SkeletonNavigation = ({ 
  items = 5,
  isLoading = true,
  children,
  className = ""
}: {
  items?: number
  isLoading?: boolean
  children?: ReactNode
  className?: string
}) => {
  if (!isLoading && children) {
    return <>{children}</>
  }

  return (
    <motion.div
      className={`flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo skeleton */}
      <div className="flex items-center space-x-2">
        <SkeletonLoader width={32} height={32} className="rounded" />
        <SkeletonLoader width={120} height={24} />
      </div>
      
      {/* Nav items skeleton */}
      <div className="hidden md:flex items-center space-x-6">
        {Array.from({ length: items }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <SkeletonLoader width={60 + Math.random() * 40} height={16} />
          </motion.div>
        ))}
      </div>
      
      {/* CTA skeleton */}
      <SkeletonLoader width={100} height={36} className="rounded-lg" />
    </motion.div>
  )
}

// Grid Skeleton
export const SkeletonGrid = ({ 
  columns = 3,
  rows = 2,
  isLoading = true,
  children,
  className = ""
}: {
  columns?: number
  rows?: number
  isLoading?: boolean
  children?: ReactNode
  className?: string
}) => {
  if (!isLoading && children) {
    return <>{children}</>
  }

  const totalItems = columns * rows

  return (
    <div 
      className={`grid gap-6 ${className}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {Array.from({ length: totalItems }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <SkeletonCard />
        </motion.div>
      ))}
    </div>
  )
}

// Progressive Loading Skeleton
export const SkeletonProgressive = ({ 
  stages = ["30%", "60%", "85%", "100%"],
  currentStage = 0,
  className = ""
}: {
  stages?: string[]
  currentStage?: number
  className?: string
}) => {
  return (
    <motion.div
      className={`space-y-4 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: stages[currentStage] || "100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      {/* Content based on stage */}
      <div className="space-y-3">
        {currentStage >= 0 && <SkeletonText lines={1} />}
        {currentStage >= 1 && <SkeletonImage height="150px" />}
        {currentStage >= 2 && <SkeletonText lines={2} />}
        {currentStage >= 3 && (
          <div className="flex space-x-3">
            <SkeletonLoader width={80} height={32} className="rounded-full" />
            <SkeletonLoader width={80} height={32} className="rounded-full" />
          </div>
        )}
      </div>
    </motion.div>
  )
}
