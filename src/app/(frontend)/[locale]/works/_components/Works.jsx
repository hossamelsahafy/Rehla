'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { IoIosSearch, IoMdGlobe } from 'react-icons/io'
import DropMenue from './DropMenue'
import WorksData from './WorksData'
const Works = () => {
  const { locale } = useParams()
  const t = useTranslations('Works')
  const [clicked, setClicked] = useState(true)
  const locations = t.raw('locations')
  const services = t.raw('services')
  const works = [
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

  return (
    <div className="max-w-6xl mx-auto p-4">
      <p className="text-2xl lg:text-4xl font-playfair my-15 italic text-white">{t('works')}</p>
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-between gap-8 lg:gap-0">
        <div className="flex flex-col items-center lg:items-center gap-4 sm:gap-5 lg:gap-5">
          <div className="relative flex items-center w-auto">
            <IoIosSearch className="text-3xl sm:text-4xl lg:text-4xl  text-white cursor-pointer transition-all duration-300" />

            <div
              className={`flex w-40 sm:w-48 lg:w-48 opacity-100'
              } transition-all duration-300 items-center overflow-hidden border-b-2 border-white/60 bg-black/80 backdrop-blur-sm rounded-lg px-2 ml-2`}
            >
              <input
                autoFocus={clicked}
                placeholder="search"
                className="bg-transparent outline-none text-white w-full placeholder-white/70 py-1"
              />
            </div>
          </div>

          <DropMenue title={t('Locations')} data={locations} Icon={IoMdGlobe} />
          <DropMenue title={t('Services')} data={services} Icon={IoMdGlobe} />
        </div>

        <WorksData data={works} locale={locale} />
      </div>
    </div>
  )
}

export default Works
