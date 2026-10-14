'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AboutPageRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/#about')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Redirecting to main portfolio...
    </div>
  )
}
