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
import GetServices from './_actions/getServices'
import GetServedPlaces from './_actions/GetServedPlaces'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [fade, setFade] = useState(false)
  const [servicesData, setServicesData] = useState([])
  const [logosData, setLogosData] = useState([])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [loading])

  useEffect(() => {
    const getAllData = async () => {
      const [services, logos] = await Promise.all([GetServices(), GetServedPlaces()])

      if (services) setServicesData(services)
      if (logos) setLogosData(logos)

      setTimeout(() => setFade(true), 300)
      setTimeout(() => setLoading(false), 1000)
    }

    getAllData()
  }, [])

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
        <ServedPlaces sliders={logosData} />
        <Work />
        <Services backendData={servicesData} />
        <News />
        <Contact />
      </div>
    </main>
  )
}
