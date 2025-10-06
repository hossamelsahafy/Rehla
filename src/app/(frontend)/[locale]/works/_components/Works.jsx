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
  const [selectedLocation, setSelectedLocation] = useState(locations[0]) // default ALL
  const [selectedService, setSelectedService] = useState(services[0]) // default ALL
  const [query, setQuery] = useState('')

  const works = [
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
  const filteredData = works.filter((item) => {
    const searchFields = ['Name', 'NameAr', 'Location', 'LocationAr', 'Services', 'ServicesAr']

    const matchesQuery = searchFields.some((field) => {
      if (!item[field]) return false
      return item[field].toLowerCase().includes(query.toLowerCase())
    })

    const matchesLocation =
      selectedLocation.name === 'ALL' ||
      selectedLocation.name === 'الكل' ||
      item.Location === selectedLocation.name ||
      item.LocationAr === selectedLocation.name

    const matchesService =
      selectedService.name === 'ALL' ||
      selectedService.name === 'الكل' ||
      item.Services === selectedService.name ||
      item.ServicesAr === selectedService.name

    return matchesQuery && matchesLocation && matchesService
  })

  return (
    <div className="max-w-6xl mx-auto p-4">
      <p className="text-2xl lg:text-4xl font-playfair my-15 italic text-white">{t('works')}</p>
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-between  gap-8 lg:gap-0">
        <div className="flex flex-col items-center lg:items-center gap-4 sm:gap-5 lg:gap-5">
          <div className="relative flex items-center w-auto">
            <IoIosSearch className="text-3xl sm:text-4xl lg:text-4xl  text-white cursor-pointer transition-all duration-300" />

            <div
              className={`flex w-40 sm:w-48 lg:w-48 opacity-100'
              } transition-all duration-300 items-center overflow-hidden border-b-2 border-white/60 bg-black/80 backdrop-blur-sm rounded-lg px-2 ml-2`}
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus={clicked}
                placeholder="search"
                className="bg-transparent outline-none text-white w-full placeholder-white/70 py-1"
              />
            </div>
          </div>

          <DropMenue
            title={t('Locations')}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
            data={locations}
            Icon={IoMdGlobe}
          />
          <DropMenue
            title={t('Services')}
            selected={selectedService}
            setSelected={setSelectedService}
            data={services}
            Icon={IoMdGlobe}
          />
        </div>

        <WorksData data={filteredData} locale={locale} />
      </div>
    </div>
  )
}

export default Works
