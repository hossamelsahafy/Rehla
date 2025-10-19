import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Slider from './Slider'
import Footer from './Footer'
const ServedPlaces = ({ sliders }) => {
  const t = useTranslations('ServedPlaces')

  const cities = [
    {
      name: 'cairo',
      svg: (
        <svg
          width="23"
          height="44"
          viewBox="0 0 23 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.003 20.702L21.839 0.984375L11.9521 0.984375L1 20.702H5.73646L11.9521 43.0973H21.839L15.7394 20.702H11.003Z"
            fill="black"
            stroke="url(#paint0_diamond_2246_2308)"
            strokeWidth="1.1"
            strokeMiterlimit="10"
          />
          <defs>
            <radialGradient
              id="paint0_diamond_2246_2308"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(21.0158 -9.27793) rotate(89.6608) scale(69.8928 51.6245)"
            >
              <stop offset="0.155" stopColor="#8787FC" />
              <stop offset="0.57" stopColor="#D4FF66" />
              <stop offset="1" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: 'dubai',
      svg: (
        <svg
          width="16"
          height="45"
          viewBox="0 0 16 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.59886 1H8.97429H1V21.2292V27.0642V39.4018V39.4585L3.75494 44.1313H15.0897V10.8012L9.59886 1Z"
            fill="black"
            stroke="url(#paint0_angular_2246_4966)"
            strokeWidth="1.23095"
            strokeMiterlimit="10"
          />
          <defs>
            <radialGradient
              id="paint0_angular_2246_4966"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0.845631 19.4042) rotate(21.2818) scale(24.8755 7.98599)"
            >
              <stop stopColor="#DEAB42" />
              <stop offset="0.2675" stopColor="#D5AE9E" />
              <stop offset="0.805" stopColor="#CCB0FA" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: 'riyadh',
      svg: (
        <svg
          width="23"
          height="45"
          viewBox="0 0 23 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9363 9.06008L17.429 0.884766L2.36328 0.884766V9.06008H5.31011C8.20415 9.06535 10.5492 11.4125 10.5492 14.3076V44.2689H21.9374V9.06008H21.9363Z"
            fill="black"
            stroke="url(#paint0_diamond_2246_3233)"
            strokeWidth="1.23095"
            strokeMiterlimit="10"
          />
          <path
            d="M20.5535 9.06008L16.0461 0.884766L0.980469 0.884766L0.980469 9.06008H3.92729C6.82133 9.06535 9.16634 11.4125 9.16634 14.3076V44.2689H20.5545V9.06008H20.5535Z"
            fill="black"
            stroke="url(#paint1_diamond_2246_3233)"
            strokeWidth="1.23095"
            strokeMiterlimit="10"
          />
          <defs>
            <radialGradient
              id="paint0_diamond_2246_3233"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(3.20345 -1.53017) rotate(55.4895) scale(57.6807 39.866)"
            >
              <stop stopColor="#CC4222" />
              <stop offset="0.673106" stopColor="#8787FC" />
              <stop offset="1" />
            </radialGradient>
            <radialGradient
              id="paint1_diamond_2246_3233"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1.82064 -1.53017) rotate(55.4895) scale(57.6807 39.866)"
            >
              <stop stopColor="#CC4222" />
              <stop offset="0.673106" stopColor="#8787FC" />
              <stop offset="1" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
  ]

  return (
    <>
      <div className="max-w-6xl mx-auto p-4 mt-20 flex flex-col gap-12 lg:gap-20 justify-center">
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-6 lg:gap-10 text-white">
          <p className="text-xl lg:text-2xl font-jost font-semibold text-center lg:text-left">
            {t('servingEverywhere')}
          </p>

          {cities.map((c) => (
            <div key={c.name} className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
              {c.svg}

              <p className="text-base sm:text-lg lg:text-4xl text-white transition-all duration-150 hover:font-playfair hover:italic">
                {t(`cities.${c.name}`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        {sliders.map((s) => (
          <Slider key={s.id} reverse={s.reverse} logos={s.logos} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default ServedPlaces
