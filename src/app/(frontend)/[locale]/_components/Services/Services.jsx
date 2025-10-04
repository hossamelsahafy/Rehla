import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import VerticalHoveredSlider from './VerticalHoveredSlider'
import ServiceMobile from './ServicesMobile'
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
    <>
      <div className="hidden lg:flex relative w-full h-screen">
        <img
          src="/ServiceBg/bg-services.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Services background"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl w-full  h-full mx-auto px-6 lg:px-12 py-8 flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:w-1/2 gap-2 ">
              <p className="italic font-playfair mt-20 mb-40 text-3xl lg:text-5xl leading-[1em] text-white">
                {t('Service')}
              </p>

              {data.map((d, i) => {
                const isActive = hoveredIndex === i
                return (
                  <div
                    key={i}
                    className="group cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredIndex(i)}
                  >
                    <p
                      className={`uppercase text-xl hover:font-bold sm:text-2xl lg:text-3xl leading-tight font-jost font-medium 
                      transition-all duration-300 ease-in-out
                      ${
                        isActive
                          ? 'italic font-playfair !font-bold text-white scale-105'
                          : 'text-white/60 group-hover:text-white hover:italic hover:font-playfair hover:font-bold hover:scale-105'
                      }
                      `}
                      style={isActive ? { color: d.titleColor } : {}}
                    >
                      {locale === 'ar' ? d.titleAr : d.title}
                    </p>

                    {isActive && (
                      <p className="text-base sm:text-lg font-jost mt-2 font-semibold text-white transition-opacity duration-300">
                        / {locale === 'ar' ? d.desAr : d.des}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>

            <div
              className="flex flex-1 lg:w-1/2 h-full group"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex !== null && (
                <div className="flex gap-8 w-full h-full">
                  <div className="flex-1 h-full">
                    <VerticalHoveredSlider
                      content={data[hoveredIndex].content}
                      slidesPerView={4}
                      reversed={false}
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
      <ServiceMobile data={data} s={t('Service')} locale={locale} />
    </>
  )
}

export default Services
