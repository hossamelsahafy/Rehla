'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
const Footer = () => {
  const t = useTranslations('ServedPlaces')

  const svgVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const textVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  }
  const { locale } = useParams()
  return (
    <div className="bgRidial w-full py-30 mt-10 flex items-center">
      <div className="max-w-6xl mx-auto flex  flex-row items-center justify-center gap-8 md:gap-20 px-4">
        <div className={`${locale === 'ar' ? 'rotate-180' : ''} `}>
          <motion.svg
            width="52"
            height="111"
            viewBox="0 0 52 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={svgVariant}
          >
            <path
              d="M28.4 109.851L12.98 53.2306H1L28.4 3.39062H45.92L18.52 53.2306H30.5L45.92 109.851H28.4Z"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M33.3505 1H50.8705L23.4805 50.85H35.4505L50.8705 107.46"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M28.4004 3.39L33.3504 1"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M18.6094 53.2005L23.5594 50.8105"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M30.5098 53.2005L35.4698 50.8105"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M46.0312 109.82L50.9813 107.43"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
          </motion.svg>
        </div>
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="text-white text-xl md:text-2xl font-jost font-semibold mb-2"
          >
            {t('FooterHeaderOne')}
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="text-white text-xl md:text-2xl font-jost font-semibold flex flex-wrap justify-center"
          >
            {t('FooterHeaderTwo')}
            <span className={locale === 'ar' ? 'mr-2 text-[#CC4222]' : 'ml-2 text-[#CC4222]'}>
              {t('Span')}
            </span>
          </motion.p>
        </div>
        <div className={`${locale === 'ar' ? 'rotate-180' : ''} `}>
          <motion.svg
            width="52"
            height="111"
            viewBox="0 0 52 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={svgVariant}
          >
            <path
              d="M23.5903 109.851L39.0103 53.2306H50.9803L23.5903 3.39062H6.07031L33.4603 53.2306H21.4904L6.07031 109.851H23.5903Z"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M18.6293 1H1.10938L28.5093 50.85H16.5294L1.10938 107.46"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M23.5889 3.39L18.6289 1"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M6.12964 3.39L1.17969 1"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M33.3799 53.2005L28.4199 50.8105"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M21.4695 53.2005L16.5195 50.8105"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M5.95001 109.82L1 107.43"
              stroke="white"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
          </motion.svg>
        </div>
      </div>
    </div>
  )
}

export default Footer
