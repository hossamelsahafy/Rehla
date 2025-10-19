// 'use client'
// import { useState, useEffect } from 'react'
// import PhoneHeader from './/PhoneHeader/PhoneHeader'
// import Works from './Works/Works'
// import VideoContent from './VideoPage/VideoContent'
// import ServedPlaces from './ServedPlaces/ServedPlaces'
// import Work from './Work/Work'
// import Services from './Services/Services'
// import News from './News/News'
// import Contact from './ContactUs/Contact'
// import Loading from './Loading'

// export default function HomeClient({ servicesData, logosData }) {
//   const [loading, setLoading] = useState(true)
//   const [fade, setFade] = useState(false)

//   useEffect(() => {
//     document.body.style.overflow = loading ? 'hidden' : 'auto'
//     return () => {
//       document.body.style.overflow = 'auto'
//     }
//   }, [loading])

//   useEffect(() => {
//     const fadeTimer = setTimeout(() => setFade(true), 300)
//     const hideTimer = setTimeout(() => setLoading(false), 1000)
//     return () => {
//       clearTimeout(fadeTimer)
//       clearTimeout(hideTimer)
//     }
//   }, [])

//   return (
//     <main className="relative">
//       <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
//         <PhoneHeader />
//         <Works />
//         <VideoContent />
//         <ServedPlaces sliders={logosData} />
//         <Work />
//         <Services backendData={servicesData} />
//         <News />
//         <Contact />
//       </div>
//     </main>
//   )
// }
