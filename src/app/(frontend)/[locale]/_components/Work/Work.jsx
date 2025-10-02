'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import WorkMobile from './WorkMobile'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Work = () => {
  const t = useTranslations('Work')

  const work = [
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
    },
    {
      Name: 'Effective Advertisements',
      NameAr: 'إعلانات فعالة',
      Subtitle: 'Boost Your Brand',
      SubtitleAr: 'عزز علامتك التجارية',
      Image: '/WorkBg/Adds.jpg',
    },
  ]
  const { locale } = useParams()
  const svgVariant = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8, // same as text
        ease: 'easeOut',
      },
    },
  }

  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8, // match svg duration
        ease: 'easeOut',
      },
    },
  }
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <>
      <div className="hidden lg:flex w-full flex-col items-center p-4 mt-20 overflow-hidden">
        {' '}
        <div className="flex flex-row justify-between items-center w-full max-w-7xl mb-12">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="italic font-playfair text-2xl sm:text-3xl md:text-4xl leading-[1em] text-white flex-1"
          >
            {t('Featured')}
          </motion.p>

          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={svgVariant}
            src="/RightImage.png"
            alt="LogoImage"
            className="object-contain w-10 sm:w-16 md:w-20 cursor-pointer"
            whileHover={{
              scale: 1.25,
              rotate: -45,
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
          />
        </div>
        <div className="relative w-full min-h-[800px] h-auto">
          <img
            src="/SlidersBg/works-slider-bg.png"
            alt="Work Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute p-4 top-0 left-0 w-full h-full flex justify-center items-center z-10">
            <motion.div
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto py-12 md:py-16 lg:py-20 px-2 sm:px-4" /* Changed pt to py for padding top and bottom */
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {work.map((w) => (
                <motion.div
                  key={w.Name}
                  variants={cardVariant}
                  className="flex flex-col items-start text-left group overflow-visible w-full xs:w-[48%] sm:w-[45%] md:w-[40%] lg:w-[30%] xl:w-[22%] min-w-[160px] max-w-[320px]"
                >
                  <div className="relative rounded-lg shadow-lg overflow-hidden w-full">
                    <img
                      src={w.Image}
                      alt={w.Name}
                      className="object-cover w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-all duration-300" />
                  </div>
                  <p className="mt-3 sm:mt-4 md:mt-5 text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.3] font-medium font-jost uppercase">
                    {locale === 'ar' ? w.NameAr : w.Name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <WorkMobile featured={t('Featured')} work={work} locale={locale} />
    </>
  )
}

export default Work
