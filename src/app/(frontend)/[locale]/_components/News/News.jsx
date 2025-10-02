import React from 'react'
import { useState } from 'react'
const News = () => {
  const posts = [
    {
      type: 'blogPost',
      typeAr: 'مدونة',
      title: 'I learned this on TikTok becomes Egypt and KSA campaign',
      titleAr: 'تعلمت هذا على تيك توك يتحول إلى حملة في مصر والمملكة العربية السعودية',
      des: ' I learned on TikTok” or “TikTok taught me,” aimed to effectively communicate the platform’s educational value.',
      desAr:
        'الرسالة الأساسية للحملة، المتجسدة في الشعار "تعلمت على تيك توك" أو "تيك توك علمني"، تهدف إلى توصيل القيمة التعليمية للمنصة بفعالية.',
      image: '/News/images.jpg',
    },
    {
      type: 'article',
      typeAr: 'مقال',
      title: 'How social media shapes modern marketing',
      titleAr: 'كيف يشكل وسائل التواصل الاجتماعي التسويق الحديث',
      des: 'An in-depth look at the ways social media platforms influence marketing strategies today.',
      desAr: 'نظرة متعمقة على طرق تأثير منصات التواصل الاجتماعي على استراتيجيات التسويق اليوم.',
      image: '/News/images.jpg',
    },
    {
      type: 'article',
      typeAr: 'مقال',
      title: 'Top 10 design trends in 2025',
      titleAr: 'أفضل 10 اتجاهات تصميم في 2025',
      des: 'Explore the most influential design trends that are shaping the visual world this year.',
      desAr: 'اكتشف أبرز اتجاهات التصميم التي تشكل العالم البصري هذا العام.',
      image: '/News/images.jpg',
    },
    {
      type: 'article',
      typeAr: 'مقال',
      title: 'The future of remote work',
      titleAr: 'مستقبل العمل عن بعد',
      des: 'Remote work is changing the way companies operate globally; here’s what you need to know.',
      desAr: 'العمل عن بعد يغير طريقة عمل الشركات عالميًا؛ إليك ما تحتاج لمعرفته.',
      image: '/News/images.jpg',
    },
    {
      type: 'blogPost',
      typeAr: 'مدونة',
      title: '5 tips for creating engaging content',
      titleAr: '5 نصائح لإنشاء محتوى جذاب',
      des: 'Learn how to make your content stand out and attract more audience interaction.',
      desAr: 'تعلم كيفية جعل محتواك مميزًا وجذب المزيد من التفاعل من الجمهور.',
      image: '/News/images.jpg',
    },
    {
      type: 'blogPost',
      typeAr: 'مدونة',
      title: '5 tips for creating engaging content',
      titleAr: '5 نصائح لإنشاء محتوى جذاب',
      des: 'Learn how to make your content stand out and attract more audience interaction.',
      desAr: 'تعلم كيفية جعل محتواك مميزًا وجذب المزيد من التفاعل من الجمهور.',
      image: '/News/images.jpg',
    },
  ]

  const [visibleCount, setVisibleCount] = useState(4)

  const handleToggle = () => {
    if (visibleCount === posts.length) {
      setVisibleCount(4)
    } else {
      setVisibleCount(posts.length)
    }
  }
  return (
    <div className="w-full mx-auto newsBg px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20 relative">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
        {posts.slice(0, visibleCount).map((p, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row rounded-lg overflow-hidden transition-all duration-300"
          >
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:block">
              <div className="w-full max-w-[300px] lg:max-w-none aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover mask" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-4 lg:p-6 flex flex-col justify-center">
              <span className="uppercase text-[15px] sm:text-[16px] lg:text-[17.25px] font-medium mb-3 text-[#CCB0FA]">
                {p.type}
              </span>
              <h3 className="font-playfair text-lg sm:text-xl lg:text-xl text-white italic">
                {p.title}
              </h3>
              <p className="font-jost futura text-sm text-white/40 mt-2">{p.des}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <button
          onClick={handleToggle}
          className="px-6 py-3 bg-transparent border text-white hover:text-black font-semibold rounded-lg hover:bg-white transition text-sm sm:text-base"
        >
          {visibleCount === posts.length ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  )
}

export default News
