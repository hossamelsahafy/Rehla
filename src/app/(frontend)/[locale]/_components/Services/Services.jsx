import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import VerticalHoveredSlider from './VerticalHoveredSlider'
import ServiceMobile from './ServicesMobile'
const Services = ({ backendData }) => {
  const t = useTranslations('Services')
  const { locale } = useParams()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [data, setData] = useState([])

  const colors = ['#4051f4', '#CC4221', '#CCB0FA', '#E67E84', '#21CC89', '#2ECCFA']
  const getData = () => {
    try {
      const reversed = backendData.slice().reverse()
      const coloredData = reversed.map((section, i) => ({
        ...section,
        titleColor: colors[i % colors.length],
      }))

      setData(coloredData)
    } catch (error) {
      console.error('Error fetching services:', error)
    }
  }

  useEffect(() => {
    getData()
  }, [backendData])

  return (
    <>
      <div className="hidden lg:flex relative w-full h-screen overflow-hidden">
        <img
          src="/ServiceBg/bg-services.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Services background"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl w-full  h-full mx-auto px-6 lg:px-12 py-8 flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:w-1/2 gap-2 ">
              <p className="italic font-playfair mt-20 mb-40 text-3xl lg:text-5xl leading-[1em] text-white">
                {t('Service')}
              </p>

              {data.map((d, i) => {
                const isActive = hoveredIndex === i
                return (
                  <div
                    key={i}
                    className="group cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredIndex(i)}
                  >
                    <p
                      className={`uppercase text-xl hover:font-bold sm:text-2xl lg:text-3xl leading-tight font-jost font-medium 
                      transition-all duration-300 ease-in-out
                      ${
                        isActive
                          ? 'italic font-playfair !font-bold text-white scale-105'
                          : 'text-white/60 group-hover:text-white hover:italic hover:font-playfair hover:font-bold hover:scale-105'
                      }
                      `}
                      style={isActive ? { color: d.titleColor } : {}}
                    >
                      {locale === 'ar' ? d.titleAr : d.title}
                    </p>

                    {isActive && (
                      <p className="text-base sm:text-lg font-jost mt-2 font-semibold text-white transition-opacity duration-300">
                        / {locale === 'ar' ? d.descriptionAr : d.description}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>

            <div
              className="flex flex-1 lg:w-1/2 h-full group"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex !== null && (
                <div className="flex gap-8 w-full h-full">
                  <div className="flex-1 h-full">
                    <VerticalHoveredSlider
                      content={data[hoveredIndex].content}
                      slidesPerView={4}
                      reversed={false}
                    />
                  </div>
                  <div className="flex-1 h-full">
                    <VerticalHoveredSlider
                      content={data[hoveredIndex].content}
                      slidesPerView={4}
                      reversed={true}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ServiceMobile data={data} s={t('Service')} locale={locale} />
    </>
  )
}

export default Services
