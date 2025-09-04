'use client'

import Link from 'next/link'
import { Globe, Users, TrendingUp, Heart } from 'lucide-react'
import { FadeInUp, StaggerContainer, SlideInLeft, SlideInRight } from '../animations'
import { Card3D, Text3D } from '../animations/3DEffects'
import { MorphingShape, LiquidMorph, MorphingText } from '../animations/MorphingEffects'
import { FeedbackCard } from '../animations/VisualFeedback'
import { motion } from 'framer-motion'

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Flexibility',
      description: 'Available across time zones for seamless worldwide collaboration.'
    },
    {
      icon: Users,
      title: 'Client-First Approach',
      description: 'Building trust through transparent communication and collaboration.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Creating robust architectures that grow with your business needs.'
    },
    {
      icon: Heart,
      title: 'Passionate Work',
      description: 'Dedicated to delivering excellence in every project I undertake.'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-dark-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            {/* Morphing Background */}
            <div className="absolute inset-0 -z-10">
              <MorphingShape
                shapes={[
                  'ellipse(100% 80% at 50% 50%)',
                  'circle(70% at 50% 50%)',
                  'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                  'ellipse(100% 80% at 50% 50%)'
                ]}
                className="w-full h-full bg-gradient-to-br from-primary-500/10 to-blue-500/10 blur-xl"
              />
            </div>
            
            <Text3D 
              text="About Me"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            />
            
            
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm a passionate Computer Vision Engineer and AI/ML Enthusiast with a strong 
                background in software development. Currently pursuing my Master's in Information 
                Security at NUST, I love working on cutting-edge projects that push the boundaries 
                of what's possible with artificial intelligence.
              </p>
           
          </div>
        </FadeInUp>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card3D key={index}>
                <FeedbackCard
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full"
                >
                  
                    <motion.div 
                      className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-primary-400" />
                    </motion.div>
                  
                  
                  <MorphingText
                    texts={[feature.title]}
                    className="text-xl font-semibold text-white mb-2"
                  />
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </FeedbackCard>
              </Card3D>
            )
          })}
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <SlideInLeft>
            <Card3D>
              <div className="relative">
                <motion.div 
                  className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <LiquidMorph className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20" />
                  <div className="absolute inset-0 bg-dark-800/50"></div>
                  <div className="relative z-10 p-8 h-full flex items-center justify-center">
                    
                      <motion.div 
                        className="text-center"
                       
                      >
                        <div className="w-15 h-15 bg-primary-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center border border-primary-500/30">
                          <span className="text-2xl">💡</span>
                        </div>
                        <Text3D 
                          text="Innovation Driven"
                          className="text-2xl font-bold text-white mb-2"
                        />
                        <p className="text-gray-300">Always exploring new technologies</p>
                      </motion.div>
                  </div>                
                </motion.div>
              </div>
            </Card3D>
          </SlideInLeft>

          {/* Content Side */}
          <SlideInRight className="space-y-6">
              <Text3D 
                text="My Journey in Technology"
                className="text-2xl md:text-3xl font-bold text-white"
              />
            
         
                <p className="text-gray-300 leading-relaxed">
                  My journey in technology began with a fascination for how machines can "see" 
                  and understand the world. This led me to specialize in computer vision, where 
                  I've developed expertise in deep learning, image processing, and AI model deployment.
                </p>
          
            
       
                <p className="text-gray-300 leading-relaxed">
                  Currently working as a Senior Computer Vision Engineer at Airloop, I lead teams 
                  in developing innovative AI solutions that solve real-world problems. My academic 
                  background in Electrical Engineering from GIKI, combined with my ongoing Master's 
                  in Information Security at NUST, provides me with a unique perspective on secure 
                  and scalable AI systems.
                </p>
            

            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4 pt-4">
              <Card3D>
                <motion.div 
                  className="p-4 rounded-lg bg-primary-500/10 border border-primary-500/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <MorphingText
                    texts={["3+", "5+", "3+"]}
                    className="text-2xl font-bold text-primary-400"
                  />
                  <div className="text-sm text-gray-400">Years in AI/ML</div>
                </motion.div>
              </Card3D>
              
              <Card3D>
                <motion.div 
                  className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <MorphingText
                    texts={["50+", "100+", "50+"]}
                    className="text-2xl font-bold text-blue-400"
                  />
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </motion.div>
              </Card3D>
            </StaggerContainer>
          </SlideInRight>
        </div>

        {/* Learn More Button */}
        <FadeInUp delay={0.6}>
          <div className="text-center mt-12">
            <Card3D>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  data-cursor-text="Learn more about me"
                  data-cursor-variant="pointer"
                >
                  <span>Learn More About Me</span>
                  <motion.svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    
                  >
                    <path
                      d="M13 7L18 12M18 12L13 17M18 12H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </Card3D>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default AboutSection
