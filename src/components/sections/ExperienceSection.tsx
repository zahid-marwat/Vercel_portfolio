'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, ExternalLink, Award, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react'
import { FadeInUp } from '../animations'
import { Card3D, Text3D } from '../animations/3DEffects'
import { FeedbackCard } from '../animations/VisualFeedback'
import { motion, AnimatePresence } from 'framer-motion'

const ExperienceSection = () => {
  const [certIndex, setCertIndex] = useState(0)

  const experiences = [
    {
      company: 'Airloop',
      position: 'Senior Computer Vision Engineer',
      duration: '2022 - Present',
      location: 'Islamabad, Pakistan (Remote)',
      type: 'Full-time',
      description: 'Leading computer vision projects and AI model development. Responsible for designing and implementing advanced computer vision solutions for various industry applications.',
      achievements: [
        'Developed real-time object detection systems with 95% accuracy',
        'Led a team of 5 engineers in AI project development',
        'Improved model inference speed by 40% through optimization techniques',
        'Implemented MLOps pipelines reducing deployment time by 60%',
        'Successfully delivered 15+ AI projects across different domains',
        'Mentored junior developers and established best engineering practices'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'MLOps', 'FastAPI', 'Docker', 'YOLO'],
      companyUrl: 'https://airloop.ai',
      companyLogo: '/assets/airloop_logo.png'
    }
  ]

  const education = [
    {
      degree: 'Master of Science in Information Security',
      institution: 'National University of Sciences and Technology (NUST)',
      duration: '2024 - 2026',
      location: 'Islamabad, Pakistan',
      status: 'Current',
      description: 'Specialized in information security, secure software development, and AI applications in cybersecurity.',
      coursework: ['Advanced Cryptography', 'Network Security', 'AI Security & Privacy'],
      gpa: '3.5 / 4.0',
      logo: '/assets/NUST.png',
      website: 'https://nust.edu.pk'
    },
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      institution: 'Ghulam Ishaq Khan Institute (GIKI)',
      duration: '2018 - 2022',
      location: 'Topi, Pakistan',
      status: 'Completed',
      description: 'Focus on electrical systems, software development, and computer vision algorithms. Graduated with distinction.',
      coursework: ['Digital Signal Processing', 'Computer Programming', 'Data Structures & Algorithms', 'Machine Learning'],
      gpa: '3.6 / 4.0',
      logo: '/assets/GIKI.png',
      website: 'https://giki.edu.pk'
    }
  ]

  const certifications = [
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      issuerLogo: '/assets/logos/cisco.png',
      date: 'Nov 2024',
      description: 'Knowledge of cybersecurity fundamentals, global threat implications, vulnerabilities, detection & defense.',
      skills: ['Cyber Best Practices', 'Network Vulnerabilities', 'Threat Detection', 'Data Privacy'],
      url: 'https://www.credly.com/badges/0e4c8c6e-2e4d-4e6c-8e6e-8e6e8e6e8e6e/public_url'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI',
      issuerLogo: '/assets/logos/deeplearningai.png',
      date: 'Dec 2023',
      description: 'Proficiency in machine learning concepts, supervised/unsupervised learning, and real-world AI applications.',
      skills: ['Machine Learning', 'Neural Networks', 'Model Optimization', 'Supervised Learning'],
      url: 'https://www.coursera.org/account/accomplishments/certificate/GHQJ6TG2WZNP'
    },
    {
      title: 'AI For Everyone',
      issuer: 'DeepLearning.AI',
      issuerLogo: '/assets/logos/deeplearningai.png',
      date: 'Aug 2023',
      description: 'Understanding core AI concepts, workflow strategy, and AI impact on software business solutions.',
      skills: ['Artificial Intelligence (AI)', 'AI Strategy', 'Tech Workflows'],
      url: 'https://www.coursera.org/account/accomplishments/certificate/PAQ83ELPAMEQ'
    },
    {
      title: 'Analyze Data to Answer Questions',
      issuer: 'Coursera / Google',
      issuerLogo: '/assets/logos/coursera.png',
      date: 'Jun 2023',
      description: 'Skills in data analysis, complex SQL queries, Google BigQuery transformations, and data-driven insights.',
      skills: ['Data Analysis', 'SQL', 'Google BigQuery', 'Spreadsheets'],
      url: 'https://www.coursera.org/account/accomplishments/certificate/U3V9RKJG3GP3'
    },
    {
      title: 'Process Data from Dirty to Clean',
      issuer: 'Coursera / Google',
      issuerLogo: '/assets/logos/coursera.png',
      date: 'May 2023',
      description: 'Expertise in data cleaning techniques, schema validation, and SQL data integrity preparation.',
      skills: ['Data Cleaning', 'SQL', 'BigQuery', 'Data Preparation'],
      url: 'https://www.coursera.org/account/accomplishments/certificate/65E9RV2K5Q2M'
    },
    {
      title: 'Ask Questions to Make Data-Driven Decisions',
      issuer: 'Coursera / Google',
      issuerLogo: '/assets/logos/coursera.png',
      date: 'Oct 2022',
      description: 'Effective analytical questioning techniques for problem solving and data-driven decisions.',
      skills: ['Problem Solving', 'Data Analytics', 'Business Intelligence'],
      url: 'https://www.coursera.org/account/accomplishments/certificate/LDG8VU5DCYNX'
    },
    {
      title: 'Foundations: Data, Data, Everywhere',
      issuer: 'Coursera / Google',
      issuerLogo: '/assets/logos/coursera.png',
      date: 'Oct 2022',
      description: 'Fundamental concepts of data ecosystems, analytics workflows, and business decision frameworks.',
      skills: ['Data Ecosystems', 'Analytics Foundations'],
      url: 'https://www.coursera.org/account/accomplishments/certificate/GTL7QZA2RWP3'
    },
    {
      title: 'One Week Python Training Workshop',
      issuer: 'Dice Analytics',
      issuerLogo: '/assets/logos/dice_analytics.png',
      date: 'Dec 2021',
      description: 'Hands-on intensive workshop in Python programming, data structures, and scientific libraries.',
      skills: ['Python', 'Data Structures', 'Automation'],
      url: ''
    },
    {
      title: 'Getting Started with Google Sheets',
      issuer: 'Coursera',
      issuerLogo: '/assets/logos/coursera.png',
      date: 'Sep 2021',
      description: 'Practical application of formulas, data organization, and spreadsheet analysis.',
      skills: ['Google Sheets', 'Data Management'],
      url: 'https://www.coursera.org/account/accomplishments/certificate/76PMED2V5ACL'
    },
    {
      title: 'Programming for Everybody (Python)',
      issuer: 'Coursera',
      issuerLogo: '/assets/logos/coursera.png',
      date: 'Aug 2021',
      description: 'Core concepts of Python syntax, functions, loops, and data structures.',
      skills: ['Python Basics', 'Algorithms'],
      url: 'https://www.coursera.org/account/accomplishments/certificate/G7PPS7H6TV4G'
    },
    {
      title: 'Google Fundamentals of Digital Marketing',
      issuer: 'Google',
      issuerLogo: '/assets/logos/google.png',
      date: 'Dec 2020',
      description: 'Comprehensive digital strategies, analytics, and online presence optimization.',
      skills: ['Digital Strategy', 'Analytics', 'Optimization'],
      url: 'https://skillshop.exceedlms.com/student/award/7TW2F2C34'
    }
  ]

  const totalCerts = certifications.length

  const nextCert = () => {
    setCertIndex((prev) => (prev + 1) % totalCerts)
  }

  const prevCert = () => {
    setCertIndex((prev) => (prev - 1 + totalCerts) % totalCerts)
  }

  const safeCertIndex = ((certIndex % totalCerts) + totalCerts) % totalCerts
  const currentCert = certifications[safeCertIndex]

  return (
    <section className="py-20 lg:py-32 bg-dark-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Experience & Credentials</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Professional engineering background, academic qualifications, and verified certifications
            </p>
          </div>
        </FadeInUp>

        {/* Experience Section */}
        <div className="mb-20">
          <FadeInUp delay={0.2}>
            <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary-400"></span>
                Professional Experience
              </h3>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card3D className="group">
                  <FeedbackCard className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1 mb-4 lg:mb-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <Text3D
                            text={exp.position}
                            className="text-2xl font-bold text-white"
                            depth={1}
                          />
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-400 border border-primary-500/30">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2 text-primary-400 font-semibold mb-2">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span className="text-gray-400 text-sm font-normal">{exp.location}</span>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4 text-primary-400" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      <Link
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center justify-center p-3 bg-white/10 rounded-xl border border-white/10 hover:border-primary-500/40 transition-transform hover:scale-105"
                      >
                        <img
                          src={exp.companyLogo}
                          alt={`${exp.company} logo`}
                          className="w-16 h-16 object-contain"
                        />
                      </Link>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary-400" />
                        Key Achievements:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start space-x-3 text-sm text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: achIndex * 0.05 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FeedbackCard>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <FadeInUp delay={0.3}>
            <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                Academic Education
              </h3>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card3D className="h-full flex flex-col flex-1">
                  <FeedbackCard className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 h-full min-h-[340px] md:min-h-[360px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 pr-3">
                          <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                          <p className="text-primary-400 font-semibold text-sm mb-1">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                            <span>{edu.duration}</span>
                            <span>•</span>
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <Link href={edu.website} target="_blank" rel="noopener noreferrer">
                            <img
                              src={edu.logo}
                              alt={`${edu.institution} logo`}
                              className="w-12 h-12 object-contain bg-white/10 rounded-lg p-1 border border-white/10 hover:scale-105 transition-transform"
                            />
                          </Link>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              edu.status === 'Current'
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}
                          >
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{edu.description}</p>

                      <div className="mb-4">
                        <span className="text-xs font-semibold text-gray-400 block mb-2">Key Coursework:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded text-xs border border-blue-500/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                      <span>Performance / Grade:</span>
                      <span className="text-white font-semibold">{edu.gpa}</span>
                    </div>
                  </FeedbackCard>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Single-Object Slideshow */}
        <div className="mb-20">
          <FadeInUp delay={0.4}>
            <div className="flex items-center justify-between mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-primary-400" />
                Certifications & Credentials
              </h3>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={prevCert}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500/30 border border-white/20 hover:border-primary-400 flex items-center justify-center text-white transition-all shadow-md active:scale-95"
                  aria-label="Previous certification"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextCert}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500/30 border border-white/20 hover:border-primary-400 flex items-center justify-center text-white transition-all shadow-md active:scale-95"
                  aria-label="Next certification"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </FadeInUp>

          {/* Single Object Slide Stage with Touch Swipe / Drag */}
          <div className="max-w-2xl mx-auto relative p-4 md:p-8 overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentCert.title}-${safeCertIndex}`}
                className="w-full cursor-grab active:cursor-grabbing"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -50 || velocity.x < -300) nextCert()
                  else if (offset.x > 50 || velocity.x > 300) prevCert()
                }}
              >
                <Card3D className="w-full">
                  <FeedbackCard className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 pr-4">
                          <h4 className="text-xl font-bold text-white mb-2">{currentCert.title}</h4>
                          <div className="flex items-center space-x-2">
                            <img
                              src={currentCert.issuerLogo}
                              alt={`${currentCert.issuer} logo`}
                              className="w-6 h-6 object-contain bg-white/10 rounded border border-gray-700"
                            />
                            <span className="text-primary-400 text-sm font-semibold">{currentCert.issuer}</span>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full border border-white/10 flex-shrink-0">
                          {currentCert.date}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {currentCert.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {currentCert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-xs font-medium border border-green-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      {currentCert.url ? (
                        <Link
                          href={currentCert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 text-sm font-semibold transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Verify Certificate</span>
                        </Link>
                      ) : (
                        <span className="inline-flex items-center space-x-1.5 text-gray-400 text-xs font-medium">
                          <ShieldCheck className="w-4 h-4 text-green-400" />
                          <span>Verified Completion</span>
                        </span>
                      )}

                      <span className="text-xs text-gray-400 font-medium">
                        {safeCertIndex + 1} of {certifications.length}
                      </span>
                    </div>
                  </FeedbackCard>
                </Card3D>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {certifications.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCertIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === safeCertIndex ? 'w-8 bg-primary-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
