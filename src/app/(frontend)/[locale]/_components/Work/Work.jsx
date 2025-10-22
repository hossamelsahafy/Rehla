'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import WorkMobile from './WorkMobile'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'

const Work = () => {
  const t = useTranslations('Work')
  const { locale } = useParams()

  const work = [
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'KSA',
      Services: 'Programming',
      LocationAr: 'السعودية',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'KSA',
      Services: 'Case Studyies',
      LocationAr: 'السعودية',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Adds',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'Egypt',
      Services: 'Programming',
      LocationAr: 'مصر',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'Egypt',
      LocationAr: 'مصر',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Designs',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'Egypt',
      Services: 'Programming',
      LocationAr: 'مصر',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'KSA',
      Services: 'Case Studyies',
      LocationAr: 'السعودية',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Adds',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'Egypt',
      Services: 'Programming',
      LocationAr: 'مصر',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'KSA',
      LocationAr: 'السعودية',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Designs',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'Egypt',
      Services: 'Programming',
      LocationAr: 'مصر',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'KSA',
      Services: 'Case Studyies',
      LocationAr: 'السعودية',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Adds',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'Egypt',
      Services: 'Programming',
      LocationAr: 'مصر',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'KSA',
      LocationAr: 'السعودية',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Designs',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'Egypt',
      Services: 'Programming',
      LocationAr: 'مصر',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'KSA',
      Services: 'Case Studyies',
      LocationAr: 'السعودية',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Adds',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'Egypt',
      Services: 'Programming',
      LocationAr: 'مصر',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'KSA',
      LocationAr: 'السعودية',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Designs',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'Egypt',
      Services: 'Programming',
      LocationAr: 'مصر',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'KSA',
      Services: 'Case Studyies',
      LocationAr: 'السعودية',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Adds',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
    {
      Name: 'Programming Mastery',
      NameAr: 'إتقان البرمجة',
      Subtitle: 'Learn to Code Efficiently',
      SubtitleAr: 'تعلم البرمجة بكفاءة',
      Image: '/WorkBg/Pro.jpg',
      Location: 'Egypt',
      Services: 'Programming',
      LocationAr: 'مصر',
      ServicesAr: 'برمجة',
    },
    {
      Name: 'Case Studies Deep Dive',
      NameAr: 'تحليل دراسات الحالة',
      Subtitle: 'Analyze Real Projects',
      SubtitleAr: 'تحليل مشاريع حقيقية',
      Image: '/WorkBg/Case.jpg',
      Location: 'KSA',
      LocationAr: 'السعودية',
      ServicesAr: 'دراسات حالة',
    },
    {
      Name: 'Creative Designs Hub',
      NameAr: 'مركز التصميم الإبداعي',
      Subtitle: 'Innovate Your Ideas',
      SubtitleAr: 'ابتكر أفكارك',
      Image: '/WorkBg/Designs.jpg',
      Location: 'Regional',
      Services: 'Designs',
      LocationAr: 'الإقليمية',
      ServicesAr: 'تصميمات',
    },
  ]

  const svgVariant = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
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
      <div className="hidden lg:flex w-full flex-col items-center p-4 my-20 overflow-hidden">
        <div className="flex flex-row justify-between items-center w-full max-w-7xl mb-12 text-TextColor">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="italic text-2xl sm:text-3xl md:text-4xl leading-[1em] flex-1"
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
              className="max-w-7xl w-full py-12 md:py-16 lg:py-20 px-2 sm:px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                spaceBetween={20}
                slidesPerView={4}
                loop
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 10 },
                  640: { slidesPerView: 2, spaceBetween: 15 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                  1280: { slidesPerView: 4, spaceBetween: 20 },
                }}
              >
                {work.map((w, i) => (
                  <SwiperSlide key={i}>
                    <motion.div
                      variants={cardVariant}
                      className="flex flex-col items-start text-left group overflow-visible w-full min-w-[160px] max-w-[320px]"
                    >
                      <div className="relative rounded-lg overflow-hidden w-full">
                        <img
                          src={w.Image}
                          alt={w.Name}
                          className={`object-cover ${locale === 'en' ? 'clibPath' : 'clipPathAr'} w-full h-48 sm:h-56 md:h-64 transition-transform duration-300 group-hover:scale-105`}
                        />
                      </div>
                      <p className="mt-4 text-TextColor text-lg md:text-xl lg:text-2xl leading-[1.3] font-medium  uppercase">
                        {locale === 'ar' ? w.NameAr : w.Name}
                      </p>
                    </motion.div>
                  </SwiperSlide>
                ))}
                <ChevronLeft className="custom-prev absolute  top-1/2 -translate-y-1/2 z-50  w-10 h-10 text-white cursor-pointer transition-colors" />
                <ChevronRight className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 text-white cursor-pointer transition-colors" />
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>

      <WorkMobile featured={t('Featured')} work={work} locale={locale} />
    </>
  )
}

export default Work
