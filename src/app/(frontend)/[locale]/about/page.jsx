'use client'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Who from './_components/Who'
import What from './_components/What'
import Dna from './_components/Dna'
import DnaDes from './_components/DnaDes'

const Page = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    const swiper = swiperRef.current?.swiper
    if (!swiper) return

    const scrollableSlides = document.querySelectorAll('.scrollable-slide')

    scrollableSlides.forEach((slide) => {
      slide.addEventListener('wheel', (e) => {
        const { scrollTop, scrollHeight, clientHeight } = slide
        const atTop = scrollTop === 0
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1

        if (e.deltaY > 0 && !atBottom) {
          swiper.mousewheel.disable()
        } else if (e.deltaY < 0 && !atTop) {
          swiper.mousewheel.disable()
        } else {
          swiper.mousewheel.enable()
        }
      })
    })
  }, [])

  return (
    <div className="relative h-screen w-full cursor-grab">
      <Swiper
        ref={swiperRef}
        direction="horizontal"
        slidesPerView={1}
        speed={800}
        mousewheel={{ forceToAxis: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <Who />
        </SwiperSlide>
        <SwiperSlide>
          <What />
        </SwiperSlide>
        <SwiperSlide>
          <Dna />
        </SwiperSlide>
        <SwiperSlide>
          <div className="scrollable-slide h-full overflow-y-auto">
            <DnaDes />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Page
