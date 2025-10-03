'use client'
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { Autoplay, FreeMode } from 'swiper/modules'
import { useParams } from 'next/navigation'

const VerticalHoveredSlider = ({ content, speed = 10000, reversed = false }) => {
  // Slower default speed
  const { locale } = useParams()
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef(null)

  if (!content || !content.length) return null

  const duplicatedContent = [...content, ...content]

  const animationName = reversed ? 'verticalScrollReversed' : 'verticalScroll'

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div
      className="h-full w-full overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={sliderRef}
    >
      <div
        className="flex flex-col"
        style={{
          animation: `${animationName} ${speed}ms linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
          transition: 'animation-play-state 300ms ease-in-out',
        }}
      >
        {duplicatedContent.map((c, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-start py-4 h-full flex-shrink-0 px-4"
          >
            <img
              src={c.image}
              alt={c.des}
              className="w-48 h-48 object-cover rounded-lg mr-6 flex-shrink-0 clibPath transition-transform duration-300 hover:scale-105"
            />
            <p className="text-lg text-white mt-4 font-medium uppercase text-left font-jost flex-1">
              {c.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VerticalHoveredSlider
