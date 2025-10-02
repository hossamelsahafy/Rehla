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
        <div className="flex flex-row justify-between items-center w-full max-w-7xl mb-12">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="italic font-playfair text-4xl leading-[1em] text-white flex-1"
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
            className="object-contain w-30 cursor-pointer"
            whileHover={{
              scale: 1.25,
              rotate: -45,
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
          />
        </div>

        <div className="relative w-full">
          <img
            src="/SlidersBg/works-slider-bg.png"
            alt="Work Background"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center text-left items-start z-10">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto pt-20"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {work.map((w) => (
                <motion.div
                  key={w.Name}
                  variants={cardVariant}
                  className="flex flex-col items-start text-left group overflow-visible"
                >
                  <div className="relative rounded-lg shadow-lg overflow-visible">
                    <img
                      src={w.Image}
                      alt={w.Name}
                      className="clibPath object-cover w-full h-72 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-all duration-300" />
                  </div>
                  <p className="w-[280px] mt-12 text-white text-2xl leading-[26.29px] font-medium font-jost uppercase">
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
