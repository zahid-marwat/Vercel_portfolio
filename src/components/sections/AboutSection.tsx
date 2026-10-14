'use client'

import { FadeInUp, StaggerContainer, SlideInRight } from '../animations'
import { Card3D, Text3D } from '../animations/3DEffects'
import { MorphingText } from '../animations/MorphingEffects'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-dark-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
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

        <div className="max-w-4xl mx-auto">
          {/* Content Side */}
          <SlideInRight className="space-y-6">
            <div className="text-center md:text-left">
              <Text3D 
                text="My Journey in Technology"
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              />
            </div>
          
            <p className="text-gray-300 leading-relaxed text-lg">
              My journey in technology began with a fascination for how machines can "see" 
              and understand the world. This led me to specialize in computer vision, where 
              I've developed expertise in deep learning, image processing, and AI model deployment.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              Currently working as a Senior Computer Vision Engineer at Airloop, I lead teams 
              in developing innovative AI solutions that solve real-world problems. My academic 
              background in Electrical Engineering from GIKI, combined with my ongoing Master's 
              in Information Security at NUST, provides me with a unique perspective on secure 
              and scalable AI systems.
            </p>

            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <Card3D>
                <motion.div 
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <MorphingText
                    texts={["3+", "5+", "3+"]}
                    className="text-3xl font-bold text-primary-400"
                  />
                  <div className="text-sm text-gray-400 mt-1 font-medium">Years in AI/ML</div>
                </motion.div>
              </Card3D>
              
              <Card3D>
                <motion.div 
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <MorphingText
                    texts={["50+", "100+", "50+"]}
                    className="text-3xl font-bold text-blue-400"
                  />
                  <div className="text-sm text-gray-400 mt-1 font-medium">Projects Delivered</div>
                </motion.div>
              </Card3D>
            </StaggerContainer>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
