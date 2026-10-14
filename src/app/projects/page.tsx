'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProjectsPageRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/#projects')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Redirecting to main portfolio...
    </div>
  )
}
