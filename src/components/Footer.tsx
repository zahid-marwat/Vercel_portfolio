'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail} from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeInUp } from './animations'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: 'https://github.com/zahid-marwat',
      icon: Github,
      label: 'GitHub'
    },
    {
      href: 'https://linkedin.com/in/zahid4830513',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      href: 'https://twitter.com/zahid89782667',
      icon: Twitter,
      label: 'Twitter'
    },
    {
      href: 'mailto:fbpzahid4830@gmail.com',
      icon: Mail,
      label: 'Email'
    }
  ]

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-dark-900/95 backdrop-blur-md border-t border-primary-500/30 relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <FadeInUp>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/" className="flex items-center space-x-2">
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-sm">ZM</span>
                  </motion.div>
                  <span className="text-xl font-bold gradient-text">Zahid Marwat</span>
                </Link>
              </motion.div>
              <p className="text-gray-400 text-sm max-w-md">
                Computer Vision Engineer & AI/ML Enthusiast passionate about building 
                innovative solutions that solve real-world problems.
              </p>
            </div>
          </FadeInUp>

          {/* Quick Links */}
          <FadeInUp delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          {/* Technologies */}
          <FadeInUp delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Technologies</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Python & AI/ML', 'Computer Vision', 'Deep Learning', 'Full-Stack Development'].map((tech, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          {/* Contact */}
          <FadeInUp delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.div
                      key={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={social.href}
                        target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                        className="w-10 h-10 bg-white/5 hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group relative overflow-hidden"
                        aria-label={social.label}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300 relative z-10" />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
              <p className="text-gray-400 text-sm">
                fpzahid4830@gmail.com
              </p>
            </div>
          </FadeInUp>
        </div>

        {/* Bottom Bar */}
        <FadeInUp delay={0.4}>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} Zahid Marwat. 
              
            </p>
            <p className="text-gray-400 text-sm">
              All rights reserved.
            </p>
          </div>
        </FadeInUp>
      </div>
    </footer>
  )
}

export default Footer
