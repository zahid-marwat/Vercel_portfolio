'use client'

import { StaggerContainer } from '../animations'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="py-16 bg-dark-800/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Stats */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '20+', label: 'Projects Delivered' },
              { number: '6+', label: 'Happy Clients' },
              { number: '3+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

export default CTASection
