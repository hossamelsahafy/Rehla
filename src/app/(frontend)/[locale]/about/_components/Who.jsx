'use client'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

const Who = () => {
  const t = useTranslations('About')
  const swaps = [t('SwapOne'), t('SwapTwo'), t('SwapThree')]
  const colors = ['#FFBBBB', '#CC4221', '#7272FD']
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const { locale } = useParams()
  useEffect(() => {
    const showDuration = 3000
    const fadeDuration = 1000
    const totalDuration = showDuration + fadeDuration

    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % swaps.length)
        setVisible(true)
      }, fadeDuration)
    }, totalDuration)

    return () => clearInterval(interval)
  }, [swaps.length])

  return (
    <div className="max-w-6xl  mx-auto p-4 md:p-16 flex flex-col overflow-hidden gap-6 md:gap-8 lg:gap-10 mt-20 md:mt-30 h-screen">
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center sm:justify-start">
        <svg
          width="70"
          height="67"
          viewBox="0 0 88 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.3599 19.8672H55.578L47.8703 33.8915H51.0894L55.7383 50.3516H55.57L55.5705 50.3534H59.1777L51.183 64.7461H43.965L51.6748 50.7179H48.4535L43.8053 34.2599H40.3652L48.3599 19.8672ZM67.2664 19.8672H60.0484L52.0536 34.2599H55.4937L60.1419 50.7179H67.36L62.7957 34.2578H59.3574L67.2664 19.8672Z"
            fill="#7272FD"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.183 64.7452H19.9649L27.8751 50.3525L35.1777 50.3525L27.183 64.7452ZM27.0894 33.8906L19.8713 33.8906L24.4356 50.3507L31.7382 50.3507L27.0894 33.8906Z"
            fill="#D4FF66"
          ></path>
        </svg>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-playfair font-semibold leading-tight md:leading-[105px] text-white text-center sm:text-left">
          {t('who')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-10 w-full text-white">
        <div className="flex flex-row gap-5 items-center">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed  font-jost max-w-full lg:max-w-[400px] xl:max-w-[420px] lg:text-left flex items-center text-center justify-center lg:justify-between">
            <span className={`hidden lg:inline-flex mb-auto ${locale === 'ar' ? 'mr-20' : ''}`}>
              <svg
                width="10"
                height="18"
                viewBox="0 0 12 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 h-3 md:w-3 md:h-4 lg:w-3 lg:h-5"
              >
                <path
                  d="M11.5765 20.6974L11.5896 9.69405V0H0.814315V9.69072L6.71858 20.6974"
                  fill="white"
                />
              </svg>
            </span>

            <span className="inline-block px-1 lg:px-2">{t('para')}</span>

            <span
              className={`hidden lg:inline-flex mt-auto ${locale === 'ar' ? 'ml-20' : 'mr-20'}`}
            >
              <svg
                width="10"
                height="18"
                viewBox="0 0 11 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 h-3 md:w-3 md:h-4 lg:w-3 lg:h-5"
              >
                <path
                  d="M0.0131478 21L-0.000244141 9.83577V0H10.9998V9.83239L4.97236 21"
                  fill="white"
                />
              </svg>
            </span>
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative min-h-[200px] md:min-h-[250px] lg:min-h-[300px]">
          <div className="relative h-[80px] md:h-[100px] lg:h-[110px] w-full flex items-center justify-center mb-4 md:mb-6">
            {swaps.map((text, i) => (
              <p
                key={i}
                className={`absolute font-jost leading-tight md:leading-[105px] text-lg md:text-xl lg:text-3xl xl:text-5xl 
                  transition-opacity duration-1000 ease-in-out text-center px-4 w-full whitespace-nowrap`}
                style={{
                  color: colors[i],
                  opacity: i === index && visible ? 1 : 0,
                }}
              >
                {text}
              </p>
            ))}
          </div>

          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white lg:uppercase font-jost leading-relaxed md:leading-[50px] text-center w-full px-4">
            {t('paraTwo')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Who
