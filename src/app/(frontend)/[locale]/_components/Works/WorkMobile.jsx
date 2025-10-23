'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
const WorksMobile = ({ locale, WorkContent }) => {
  const paginationRef = useRef(null)
  return (
    <>
      <div className="lg:hidden mt-20 relative w-full h-screen">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          spaceBetween={16}
          slidesPerView={1}
          className="h-full relative"
        >
          {WorkContent.map((w, i) => (
            <SwiperSlide
              key={i}
              className="relative flex flex-col rounded-md overflow-hidden cursor-pointer h-full"
            >
              <img
                src={w.highLight}
                alt={`Highlight ${i}`}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80 z-10"></div>

              <div className="relative z-20 flex flex-col items-center gap-4 p-4 h-full justify-center">
                <img
                  src={w.Image}
                  alt={`Card image ${i}`}
                  className="imagebg w-full object-contain"
                />
                <h3 className="text-2xl md:text-3xl text-start font-medium uppercase mt-4 mb-4 text-white">
                  {locale === 'ar' ? w.titleAr : w.title}
                </h3>
                <p className="text-lg text-start text-[#ffffff50] font-bold uppercase">
                  {locale === 'ar' ? w.desAr : w.des}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={paginationRef}
          className="custom-pagination absolute bottom-6 inset-x-0 flex justify-center z-1"
        ></div>
      </div>
    </>
  )
}

export default WorksMobile
