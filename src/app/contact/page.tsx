'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Calendar, Clock, Globe } from 'lucide-react'
import { FadeInUp, StaggerContainer, SlideInLeft, SlideInRight } from '../../components/animations'
import { Card3D, Text3D, Button3D } from '../../components/animations/3DEffects'
import { FeedbackButton, FeedbackCard, FeedbackInput } from '../../components/animations/VisualFeedback'
import { motion } from 'framer-motion'
import Squares from '../../components/Squares'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Drop me a line anytime',
      value: 'fbpzahid4830@gmail.com',
      href: 'mailto:fbpzahid4830@gmail.com',
      color: 'text-primary-400'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Let\'s connect professionally',
      value: 'linkedin.com/in/zahid4830513',
      href: 'https://linkedin.com/in/zahid4830513',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check out my repositories',
      value: 'github.com/zahid-marwat',
      href: 'https://github.com/zahid-marwat',
      color: 'text-gray-400'
    },
    {
      icon: Twitter,
      title: 'Twitter',
      description: 'Follow for tech updates',
      value: '@zahid89782667',
      href: 'https://twitter.com/zahid89782667',
      color: 'text-blue-400'
    }
  ]

  const availability = [
    {
      icon: Clock,
      title: 'Response Time',
      description: 'I typically respond to emails within 24 hours during business days'
    },
    {
      icon: Calendar,
      title: 'Project Availability',
      description: 'Currently available for freelance projects and collaboration opportunities'
    },
    {
      icon: MapPin,
      title: 'Time Zone',
      description: 'Based in Pakistan (PKT - UTC+5), flexible with global time zones'
    }
  ]

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Squares Background */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <Squares 
          speed={0.1} 
          squareSize={60}
          direction='diagonal'
          borderColor='rgba(255, 255, 255, 0.06)'
          hoverFillColor='rgba(99, 102, 241, 0.05)'
          frameLimit={15}
        />
      </div>
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-16 relative">
              
              <Text3D 
                text="Get In Touch"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              />
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Let's discuss your next project or collaboration opportunity
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <SlideInLeft>
              <div className="space-y-8">
                
                {/* Contact Methods */}
                <StaggerContainer staggerDelay={0.1} className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <Card3D key={index}>
                        <FeedbackCard
                          className="block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                        >
                          <Link
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : '_self'}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="block"
                            data-cursor-text={`Contact via ${method.title}`}
                            data-cursor-variant="pointer"
                          >
                            <div className="flex items-start space-x-4">
                              <motion.div 
                                className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Icon className={`w-6 h-6 ${method.color}`} />
                              </motion.div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white mb-1">
                                  {method.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                                <motion.span 
                                  className={`font-medium ${method.color}`}
                                  whileHover={{ scale: 1.02 }}
                                >
                                  {method.value}
                                </motion.span>
                              </div>
                            </div>
                          </Link>
                        </FeedbackCard>
                      </Card3D>
                    )
                  })}
                </StaggerContainer>

                
              </div>
            </SlideInLeft>

            {/* Contact Form */}
            <SlideInRight>
              <Card3D>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                  {/* 3D Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-20">
                    
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-20">
                    
                  </div>
                  
                  <Text3D 
                    text="Send a Message"
                    className="text-2xl font-bold text-white mb-6"
                  />
                  
                  <form className="space-y-6">
                    <StaggerContainer staggerDelay={0.1}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                              Name *
                            </label>
                            <motion.input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                              placeholder="Your name"
                              whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                              data-cursor-text="Enter your name"
                              data-cursor-variant="text"
                            />
                          </div>
                        
                        
                        
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                              Email *
                            </label>
                            <motion.input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                              placeholder="your.email@example.com"
                              whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                              data-cursor-text="Enter your email"
                              data-cursor-variant="text"
                            />
                          </div>
                        
                      </div>

                      
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                            Subject *
                          </label>
                          <motion.input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                            placeholder="Project inquiry, collaboration, etc."
                            whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                            data-cursor-text="Enter subject"
                            data-cursor-variant="text"
                          />
                        </div>
                      

                      
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Message *
                          </label>
                          <motion.textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200 resize-none"
                            placeholder="Tell me about your project, requirements, timeline, etc."
                            whileFocus={{ scale: 1.01 }}
                          />
                        </div>
                      

                      <Button3D className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg">
                        <motion.button
                          type="submit"
                          className="w-full flex items-center justify-center space-x-2"
                          data-cursor-text="Send your message!"
                          data-cursor-variant="pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </motion.button>
                      </Button3D>
                    </StaggerContainer>
                  </form>

                  <motion.div 
                    className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg"
                    whileHover={{ scale: 1.01 }}
                  >
                    <p className="text-blue-400 text-sm">
                      📧 Alternatively, you can email me directly at{' '}
                      <Link 
                        href="mailto:fbpzahid4830@gmail.com" 
                        className="underline hover:text-blue-300"
                        data-cursor-text="Send email directly"
                        data-cursor-variant="pointer"
                      >
                        fbpzahid4830@gmail.com
                      </Link>
                    </p>
                  </motion.div>
                </div>
              </Card3D>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 bg-dark-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Text3D 
                text="Availability & Response"
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              
                <p className="text-lg text-gray-300">
                  Here's what you can expect when working with me
                </p>
              
            </div>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {availability.map((item, index) => {
              const Icon = item.icon
              return (
                <Card3D key={index}>
                  <FeedbackCard
                    className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full"
                  >
                    
                      <motion.div 
                        className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-primary-400" />
                      </motion.div>
                    
                    
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    
                    
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    
                    
                    {/* 3D Decoration */}
                    <div className="absolute top-2 right-2 opacity-20">
                      
                    </div>
                  </FeedbackCard>
                </Card3D>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  )
}
