'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState, useEffect } from 'react'

// Interactive Button with Visual Feedback
export const FeedbackButton = ({ 
  children,
  onClick,
  variant = "primary",
  className = "",
  successMessage = "Success!",
  loadingMessage = "Loading..."
}: {
  children: ReactNode
  onClick?: () => Promise<void> | void
  variant?: "primary" | "secondary" | "success" | "error"
  className?: string
  successMessage?: string
  loadingMessage?: string
}) => {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleClick = async () => {
    if (!onClick) return
    
    setState("loading")
    try {
      await onClick()
      setState("success")
      setTimeout(() => setState("idle"), 2000)
    } catch (error) {
      setState("error")
      setTimeout(() => setState("idle"), 2000)
    }
  }

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-primary-500 hover:bg-primary-600 text-white"
      case "secondary":
        return "bg-gray-600 hover:bg-gray-700 text-white"
      case "success":
        return "bg-green-500 hover:bg-green-600 text-white"
      case "error":
        return "bg-red-500 hover:bg-red-600 text-white"
      default:
        return "bg-primary-500 hover:bg-primary-600 text-white"
    }
  }

  const getStateColor = () => {
    switch (state) {
      case "loading": return "bg-yellow-500"
      case "success": return "bg-green-500"
      case "error": return "bg-red-500"
      default: return getVariantStyles()
    }
  }

  return (
    <motion.button
      className={`relative overflow-hidden px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${className}`}
      onClick={handleClick}
      disabled={state === "loading"}
      whileHover={{ scale: state === "idle" ? 1.05 : 1 }}
      whileTap={{ scale: state === "idle" ? 0.95 : 1 }}
      animate={{
        backgroundColor: state === "idle" ? undefined : 
          state === "loading" ? "#eab308" :
          state === "success" ? "#22c55e" :
          state === "error" ? "#ef4444" : undefined
      }}
    >
      {/* Ripple Effect */}
      {state === "idle" && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ scale: 0, opacity: 1 }}
          whileHover={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Loading Animation */}
      {state === "loading" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.span
          key={state}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 flex items-center justify-center space-x-2"
        >
          {state === "loading" && (
            <motion.div
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
          {state === "success" && <span>✓</span>}
          {state === "error" && <span>✕</span>}
          <span>
            {state === "loading" ? loadingMessage :
             state === "success" ? successMessage :
             state === "error" ? "Error!" :
             children}
          </span>
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

// Form Input with Visual Feedback
export const FeedbackInput = ({ 
  type = "text",
  placeholder,
  value,
  onChange,
  onValidate,
  className = "",
  label,
  errorMessage,
  successMessage = "Valid!"
}: {
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  onValidate?: (value: string) => boolean
  className?: string
  label?: string
  errorMessage?: string
  successMessage?: string
}) => {
  const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle")
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (onValidate && value) {
      setStatus(onValidate(value) ? "valid" : "invalid")
    } else if (value === "") {
      setStatus("idle")
    }
  }, [value, onValidate])

  const getBorderColor = () => {
    switch (status) {
      case "valid": return "border-green-500"
      case "invalid": return "border-red-500"
      default: return isFocused ? "border-primary-500" : "border-gray-600"
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <motion.label
          className="block text-sm font-medium text-gray-300"
          animate={{ color: status === "invalid" ? "#ef4444" : "#d1d5db" }}
        >
          {label}
        </motion.label>
      )}
      
      <div className="relative">
        <motion.input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border-2 transition-all duration-300 focus:outline-none text-white placeholder-gray-400 ${getBorderColor()}`}
          animate={{
            scale: isFocused ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Status Icon */}
        <AnimatePresence>
          {status !== "idle" && (
            <motion.div
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              {status === "valid" ? (
                <span className="text-green-500">✓</span>
              ) : (
                <span className="text-red-500">✕</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Focus Ring */}
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-primary-500 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ filter: "blur(4px)" }}
          />
        )}
      </div>
      
      {/* Feedback Message */}
      <AnimatePresence>
        {(status === "invalid" && errorMessage) || (status === "valid" && successMessage) ? (
          <motion.p
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className={`text-sm ${status === "invalid" ? "text-red-400" : "text-green-400"}`}
          >
            {status === "invalid" ? errorMessage : successMessage}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

// Hover Card with Feedback
export const FeedbackCard = ({ 
  children,
  hoverContent,
  className = ""
}: {
  children: ReactNode
  hoverContent?: ReactNode
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Card */}
      <motion.div
        className="relative z-10 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
        animate={{
          borderColor: isHovered ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.1)",
          boxShadow: isHovered ? "0 20px 40px rgba(59, 130, 246, 0.2)" : "0 4px 20px rgba(0, 0, 0, 0.1)"
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      
      {/* Hover Overlay */}
      <AnimatePresence>
        {isHovered && hoverContent && (
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {hoverContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Glow Effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-xl blur-xl -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        />
      )}
    </motion.div>
  )
}

// Progress Feedback
export const ProgressFeedback = ({ 
  progress,
  label,
  showPercentage = true,
  className = ""
}: {
  progress: number
  label?: string
  showPercentage?: boolean
  className?: string
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-300">{label}</span>
          {showPercentage && (
            <motion.span
              className="text-sm text-primary-400 font-mono"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
              key={progress}
            >
              {Math.round(progress)}%
            </motion.span>
          )}
        </div>
      )}
      
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  )
}

// Tooltip Feedback
export const TooltipFeedback = ({ 
  children,
  content,
  position = "top",
  className = ""
}: {
  children: ReactNode
  content: ReactNode
  position?: "top" | "bottom" | "left" | "right"
  className?: string
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2"
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2"
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2"
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
    }
  }

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute z-50 px-3 py-2 bg-black/90 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap ${getPositionStyles()}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {content}
            
            {/* Arrow */}
            <div
              className={`absolute w-2 h-2 bg-black/90 rotate-45 ${
                position === "top" ? "top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2" :
                position === "bottom" ? "bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2" :
                position === "left" ? "left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2" :
                "right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
