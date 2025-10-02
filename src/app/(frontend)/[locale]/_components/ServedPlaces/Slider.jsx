'use client'
import React, { useState, useEffect } from 'react'
import Slider from 'react-infinite-logo-slider'
import { useParams } from 'next/navigation'
const LogoSlider = ({ reverse = false }) => {
  const logos = [
    '/Swiper/swiper1.png',
    '/Swiper/swiper2.png',
    '/Swiper/swiper3.png',
    '/Swiper/swiper4.png',
    '/Swiper/swiper5.png',
    '/Swiper/swiper6.png',
    '/Swiper/swiper7.png',
    '/Swiper/swiper8.png',
  ]

  const [slideWidth, setSlideWidth] = useState(200)
  const [mounted, setMounted] = useState(false)
  const { locale } = useParams()
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 480) setSlideWidth(150)
      else if (window.innerWidth < 768) setSlideWidth(180)
      else if (window.innerWidth < 1024) setSlideWidth(220)
      else setSlideWidth(250)
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    setMounted(true)

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="mt-8 md:mt-10 w-full overflow-hidden relative"
      style={{
        ...(reverse ? { transform: 'scaleX(-1)' } : {}),
        ...(locale === 'ar' ? { direction: 'ltr' } : {}),
      }}
    >
      <Slider
        width={`${slideWidth}px`}
        duration={30}
        blurBorders={true}
        blurBorderColor={'#000000'}
        blurBorderSize={50}
        hoverPause={true}
      >
        {logos.map((src, idx) => (
          <Slider.Slide
            className="px-1"
            key={idx}
            style={reverse ? { transform: 'scaleX(-1)' } : {}}
          >
            <img src={src} alt={`Logo ${idx}`} className="h-16 object-contain" />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  )
}

export default LogoSlider
