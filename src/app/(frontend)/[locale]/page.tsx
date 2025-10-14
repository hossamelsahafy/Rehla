'use client'
import { useState, useEffect } from 'react'
import PhoneHeader from './_components/PhoneHeader/PhoneHeader'
import Works from './_components/Works/Works'
import VideoContent from './_components/VideoPage/VideoContent'
import ServedPlaces from './_components/ServedPlaces/ServedPlaces'
import Work from './_components/Work/Work'
import Services from './_components/Services/Services'
import News from './_components/News/News'
import Contact from './_components/ContactUs/Contact'
import Loading from './_components/Loading'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [fade, setFade] = useState(false)
  const [loadedComponents, setLoadedComponents] = useState({
    services: false,
    // Add other critical components here if needed
  })

  const handleComponentLoaded = (componentName: string) => {
    setLoadedComponents((prev) => ({
      ...prev,
      [componentName]: true,
    }))
  }

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [loading])
  useEffect(() => {
    const allLoaded = Object.values(loadedComponents).every(Boolean)

    if (allLoaded) {
      setTimeout(() => setFade(true), 300)
      setTimeout(() => setLoading(false), 1000)
    }
  }, [loadedComponents])
  return (
    <main className="relative">
      {loading && (
        <div
          className={`fixed inset-0 flex items-center justify-center w-full h-full bg-black z-[9999] transition-opacity duration-700 ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Loading />
        </div>
      )}

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <PhoneHeader />
        <Works />
        <VideoContent />
        <ServedPlaces />
        <Work />
        <Services onLoadComplete={() => handleComponentLoaded('services')} />
        <News />
        <Contact />
      </div>
    </main>
  )
}
