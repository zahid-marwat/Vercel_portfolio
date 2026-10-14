'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ExperiencePageRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/#experience')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Redirecting to main portfolio...
    </div>
  )
}
