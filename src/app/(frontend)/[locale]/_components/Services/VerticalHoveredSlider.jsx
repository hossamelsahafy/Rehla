'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { Autoplay, FreeMode } from 'swiper/modules'
import { useParams } from 'next/navigation'
const VerticalHoveredSlider = ({ content }) => {
  if (!content || !content.length) return null
  const repeatedContent = [...content, ...content]
  const { locale } = useParams()
  return (
    <div className="w-full h-full overflow-hidden flex gap-2 sm:gap-3 lg:gap-6">
      <div className="flex-1 h-full">
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={8}
          loop={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          speed={4000}
          modules={[Autoplay, FreeMode]}
          className="h-full"
          allowTouchMove={true}
        >
          {repeatedContent.map((c, i) => (
            <SwiperSlide
              key={`first-${i}`}
              className="flex flex-col items-center justify-start cursor-pointer"
            >
              <img
                src={c.image}
                alt={c.des}
                className="
    w-full 
    h-auto 
    max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[400px] 
    max-h-[100px] sm:max-h-[120px] md:max-h-[140px] lg:max-h-[400px] 
    object-cover 
    rounded-lg 
    transition-transform 
    duration-300 
    hover:scale-105
    clibPath
  "
              />
              <p className="text-left mt-1 text-xs sm:text-sm md:text-base font-jost uppercase text-white font-medium px-1">
                {locale === 'en' ? c.des : c.desAr}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex-1 h-full">
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={8}
          loop={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
            reverseDirection: true,
          }}
          speed={4500}
          modules={[Autoplay, FreeMode]}
          className="h-full"
          allowTouchMove={true}
        >
          {repeatedContent.map((c, i) => (
            <SwiperSlide
              key={`second-${i}`}
              className="flex flex-col items-center justify-start cursor-pointer"
            >
              <img
                src={c.image}
                alt={c.des}
                className="
                w-full 
                h-auto 
                max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[400px] 
                max-h-[150px] sm:max-h-[170px] md:max-h-[190px] lg:max-h-[450px] 
                object-cover 
                rounded-lg 
                transition-transform 
                duration-300 
                hover:scale-105
                clibPath
                "
              />
              <p className="text-left mt-1 text-xs sm:text-sm md:text-base font-jost uppercase text-white font-medium px-1">
                {locale === 'en' ? c.des : c.desAr}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default VerticalHoveredSlider
