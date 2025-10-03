import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import VerticalHoveredSlider from './VerticalHoveredSlider'

const Services = () => {
  const t = useTranslations('Services')
  const { locale } = useParams()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const data = [
    {
      title: 'Programming',
      titleAr: 'البرمجة',
      des: 'Learn coding and software development.',
      desAr: 'تعلم البرمجة وتطوير البرمجيات.',
      titleColor: '#4051f4',
      content: [
        { image: '/WorkBg/Pro.jpg', des: 'JavaScript projects', desAr: 'مشاريع جافاسكريبت' },
        { image: '/WorkBg/Pro.jpg', des: 'Python scripts', desAr: 'سكربتات بايثون' },
        { image: '/WorkBg/Pro.jpg', des: 'Web apps', desAr: 'تطبيقات ويب' },
        { image: '/WorkBg/Pro.jpg', des: 'Mobile apps', desAr: 'تطبيقات موبايل' },
      ],
    },
    {
      title: 'Designs',
      titleAr: 'التصميم',
      des: 'Creative visual content and UI/UX.',
      desAr: 'محتوى بصري إبداعي وتجربة المستخدم.',
      titleColor: '#CC4221',
      content: [
        { image: '/WorkBg/Designs.jpg', des: 'Web design', desAr: 'تصميم مواقع' },
        { image: '/WorkBg/Designs.jpg', des: 'Graphic design', desAr: 'تصميم جرافيك' },
        { image: '/WorkBg/Designs.jpg', des: 'Logo design', desAr: 'تصميم شعارات' },
        { image: '/WorkBg/Designs.jpg', des: 'Illustrations', desAr: 'رسوم توضيحية' },
      ],
    },
    {
      title: 'Case Study',
      titleAr: 'دراسة حالة',
      des: 'Detailed analysis of projects and outcomes.',
      desAr: 'تحليل مفصل للمشاريع والنتائج.',
      titleColor: '#CCB0FA',
      content: [
        { image: '/WorkBg/Case.jpg', des: 'Market research', desAr: 'بحث السوق' },
        { image: '/WorkBg/Case.jpg', des: 'User behavior', desAr: 'سلوك المستخدم' },
        { image: '/WorkBg/Case.jpg', des: 'Project insights', desAr: 'رؤى المشروع' },
        { image: '/WorkBg/Case.jpg', des: 'Performance review', desAr: 'مراجعة الأداء' },
      ],
    },
    {
      title: 'Adds',
      titleAr: 'إعلانات',
      des: 'Promotional content and marketing ads.',
      desAr: 'محتوى ترويجي وإعلانات التسويق.',
      titleColor: '#E67E84',
      content: [
        { image: '/WorkBg/Adds.jpg', des: 'Social media ads', desAr: 'إعلانات وسائل التواصل' },
        { image: '/WorkBg/Adds.jpg', des: 'Banner ads', desAr: 'إعلانات بانر' },
        { image: '/WorkBg/Adds.jpg', des: 'Video ads', desAr: 'إعلانات فيديو' },
        { image: '/WorkBg/Adds.jpg', des: 'Campaigns', desAr: 'حملات تسويقية' },
      ],
    },
  ]

  return (
    <div className="hidden lg:flex relative w-full mt-10 lg:mt-20 h-screen">
      <img
        src="/ServiceBg/bg-services.png"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl w-full h-full mx-auto px-4 sm:px-4 lg:px-20 py-4">
          <p className="italic font-playfair mt-8 sm:mt-12 lg:mt-18 text-3xl lg:text-5xl leading-[1em] text-white px-2 sm:px-0">
            {t('Service')}
          </p>
          <div
            className="group flex flex-col lg:flex-row justify-between relative mt-6 sm:mt-8 lg:mt-10 w-full h-full"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col lg:w-1/2 gap-24 sm:gap-5 items-start px-2 sm:px-0">
              {data.map((d, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  style={{ color: hoveredIndex === i ? d.titleColor : '#ffffff60' }}
                  className="w-full group/title"
                >
                  <p className="uppercase text-xl sm:text-2xl lg:text-3xl w-full transition-all duration-300 cursor-pointer hover:text-2xl sm:hover:text-3xl lg:hover:text-4xl hover:font-playfair hover:italic hover:font-bold leading-[91%] font-jost font-medium px-2 sm:px-0">
                    {locale === 'ar' ? d.titleAr : d.title}
                  </p>
                  {hoveredIndex === i && (
                    <p className="text-base sm:text-lg font-jost mt-2 sm:mt-3 font-semibold text-white px-2 sm:px-0">
                      / {locale === 'ar' ? d.desAr : d.des}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="slider-container lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 px-2 sm:px-0 h-[80%] overflow-hidden">
              {hoveredIndex !== null && (
                <div className="flex gap-8 h-full">
                  <div className="flex-1 !h-auto">
                    <VerticalHoveredSlider
                      content={data[hoveredIndex].content}
                      slidesPerView="4"
                      reverse={false}
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
    </div>
  )
}

export default Services
