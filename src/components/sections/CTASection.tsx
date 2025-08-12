'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Calendar } from 'lucide-react'
import { FadeInUp, StaggerContainer, ScaleIn } from '../animations'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <ScaleIn>
            <div className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary-500/20 via-blue-500/20 to-purple-500/20 border border-white/10 text-center overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"></div>
              <motion.div 
                className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.1, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              <div className="relative z-10">
                <FadeInUp delay={0.2}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Ready To Take Your Digital Presence{' '}
                    <span className="gradient-text">To The Next Level?</span>
                  </h2>
                </FadeInUp>
                <FadeInUp delay={0.4}>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Let's collaborate to transform your ideas into innovative AI solutions and 
                    scalable applications that drive real business impact.
                  </p>
                </FadeInUp>

                {/* CTA Buttons */}
                <FadeInUp delay={0.6}>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Start a Conversation</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="https://calendly.com/zahid-marwat/consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>Schedule a Call</span>
                      </Link>
                    </motion.div>
                  </div>
                </FadeInUp>

                {/* Features Grid */}
                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  {[
                    {
                      icon: '🚀',
                      title: 'Fast Delivery',
                      description: 'Quick turnaround without compromising quality'
                    },
                    {
                      icon: '🔧',
                      title: 'Custom Solutions',
                      description: 'Tailored to your specific business needs'
                    },
                    {
                      icon: '📞',
                      title: '24/7 Support',
                      description: 'Ongoing support and maintenance'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="text-3xl mb-3"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.6 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </ScaleIn>

          {/* Contact Methods */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="w-8 h-8 text-primary-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
              <p className="text-gray-400 mb-4">Drop me a line for project inquiries</p>
              <Link
                href="mailto:fbpzahid4830@gmail.com"
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200"
              >
                fbpzahid4830@gmail.com
              </Link>
            </motion.div>

            <motion.div 
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Calendar className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Schedule a Call</h3>
              <p className="text-gray-400 mb-4">Let's discuss your project in detail</p>
              <Link
                href="https://calendly.com/zahid-marwat/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Book a meeting
              </Link>
            </motion.div>
          </StaggerContainer>

          {/* Stats */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '25+', label: 'Happy Clients' },
              { number: '3+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
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
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

export default CTASection
