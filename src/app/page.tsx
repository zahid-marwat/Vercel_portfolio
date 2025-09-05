import dynamic from 'next/dynamic'

// Dynamically import all sections to avoid SSR issues with framer-motion
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), { ssr: false })
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { ssr: false })
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), { ssr: false })
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), { ssr: false })
const TechStackSection = dynamic(() => import('@/components/sections/TechStackSection'), { ssr: false })
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: false })
const CTASection = dynamic(() => import('@/components/sections/CTASection'), { ssr: false })
const Squares = dynamic(() => import('@/components/Squares'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Optimized Squares Background */}
      <div className="fixed inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.2}
          borderColor="rgba(59, 130, 246, 0.1)"
          squareSize={60}
          hoverFillColor="rgba(59, 130, 246, 0.05)"
          frameLimit={30}
        />
      </div>

      <div className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="tech-stack">
          <TechStackSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <CTASection />
        </section>
      </div>
    </div>
  )
}
