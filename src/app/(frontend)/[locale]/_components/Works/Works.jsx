'use client'
import React from 'react'
import WorksDeskTop from './WorksDesktop'
import WorksMobile from './WorkMobile'
import { useParams } from 'next/navigation'
const Works = () => {
  const WorkContent = [
    {
      title: 'From Scrollers To Scholars',
      titleAr: 'من المتصفحين إلى العلماء',
      highLight: '/HighLight/HighLightOne.png',
      des: 'CREATIVE / PRODUCTION - Case Study',
      desAr: 'إبداع / إنتاج - دراسة حالة',
      bg: '/WorkBg/bgOne.png',
      Image: '/Image/ImageOne.png',
    },
    {
      title: 'First Ever FC25 Clubhouse Event in Riyadh',
      titleAr: 'أول حدث FC25 كلوب هاوس في الرياض',
      highLight: '/HighLight/HighLightTwo.png',
      des: 'SPORTS / CREATIVE / SOCIAL / PRODUCTION - Case Study',
      desAr: 'رياضة / إبداع / اجتماعي / إنتاج - دراسة حالة',
      bg: '/WorkBg/bgTwo.png',
      Image: '/Image/ImageTwo.png',
    },
    {
      title: 'Everyday Fandom: Our Playbook for Cultural Resonance',
      titleAr: 'المتابعون اليوميون: دليلنا للتواصل الثقافي',
      highLight: '/HighLight/HighLightThree.png',
      des: 'Blogpost by Zeyad Salem - Kijamii ECD',
      desAr: 'مقال بواسطة زياد سالم - Kijamii ECD',
      bg: '/WorkBg/bgThree.png',
      Image: '/Image/ImageThree.png',
    },
  ]
  const { locale } = useParams()
  return (
    <div>
      <WorksDeskTop WorkContent={WorkContent} locale={locale} />
      <WorksMobile WorkContent={WorkContent} locale={locale} />
    </div>
  )
}

export default Works
