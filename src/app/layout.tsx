import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

// Dynamically import components that use framer-motion to avoid SSR issues
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://zahid-marwat.vercel.app'),
  title: 'Zahid Marwat - Computer Vision Engineer & AI/ML Enthusiast',
  description: 'Portfolio of Zahid Marwat - Passionate about building innovative AI solutions that solve real-world problems. Specializing in computer vision, machine learning, and full-stack development.',
  keywords: ['Computer Vision', 'AI', 'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
  authors: [{ name: 'Zahid Marwat' }],
  creator: 'Zahid Marwat',
  openGraph: {
    title: 'Zahid Marwat - Computer Vision Engineer & AI/ML Enthusiast',
    description: 'Passionate about building innovative AI solutions that solve real-world problems.',
    url: 'https://zahid-marwat.vercel.app',
    siteName: 'Zahid Marwat Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zahid Marwat Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zahid Marwat - Computer Vision Engineer & AI/ML Enthusiast',
    description: 'Passionate about building innovative AI solutions that solve real-world problems.',
    creator: '@zahid89782667',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white min-h-screen`}>
        <div className="relative">
          {/* Enhanced Background Effects */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Animated gradient background */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                background: `
                  radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                  radial-gradient(ellipse at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                  radial-gradient(ellipse at 40% 80%, rgba(236, 72, 153, 0.10) 0%, transparent 50%)
                `
              }}
            />
            
            {/* Moving gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          
          {/* Scroll Progress */}
          <ScrollProgress />
          
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
