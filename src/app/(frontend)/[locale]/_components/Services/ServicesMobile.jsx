'use client'
import React, { useState } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'
import MobileSwiper from './MobileSwiper'

const ServicesMobile = ({ data, s, locale }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="text-white lg:hidden max-w-6xl mx-auto p-8">
      <p className="font-playfair mt-20 italic font-bold text-left text-2xl">{s}</p>
      {data.map((d, i) => {
        const isActive = i === activeIndex
        return (
          <div key={i} className="flex flex-col gap-4 mt-10">
            <div className="flex flex-row justify-between items-center gap-5">
              <p
                className={`text-2xl uppercase text-white/40 ${
                  isActive ? 'font-playfair italic !font-bold' : 'font-jost'
                }`}
                style={isActive ? { color: d.titleColor } : {}}
              >
                {locale === 'en' ? d.title : d.titleAr}
              </p>

              <div
                onClick={() => setActiveIndex(isActive ? null : i)}
                className={`text-lg cursor-pointer transform transition-transform duration-300 ease-in-out ${
                  isActive ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <FaArrowAltCircleDown />
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isActive ? 'opacity-100 max-h-[1000px] mt-4' : 'opacity-0 max-h-0'
              }`}
            >
              <p className={`text-lg text-white transition-opacity mt-4 ease-in-out duration-300 `}>
                / {locale === 'en' ? d.des : d.desAr}
              </p>
              {isActive && <MobileSwiper locale={locale} activeData={d} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ServicesMobile
