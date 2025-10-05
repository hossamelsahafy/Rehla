import React from 'react'

const WorksData = ({ data, locale }) => {
  return (
    <div className="relative w-full">
      <div className="fixed mr-10 lg:mr-0 top-0 right-0 w-[80%] h-full pointer-events-none z-0 bg-[url('/WorkBg/projects.png')] bg-cover bg-repeat-y bg-center"></div>

      <div className="relative grid grid-cols-1 gap-2 p-6 md:p-8 sm:p-4">
        {data.map((item, i) => (
          <div
            key={i}
            className={`flex flex-row items-center gap-4 mb-4
          ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}
        `}
          >
            <img
              src={item.Image}
              alt={item.Name}
              className={`w-[200px] h-[200px] md:w-[400px]  md:h-[200px] sm:w-[300px] sm:h-[160px] object-contain rounded-lg flex-shrink-0 ${
                locale === 'en' ? 'clibPath' : 'clipPathAr'
              }`}
            />

            <div className="flex flex-col max-w-lg md:max-w-md sm:max-w-full text-left">
              <h3 className="text-white text-base md:text-lg  font-semibold">
                {locale === 'ar' ? item.NameAr : item.Name}
              </h3>
              <p className="text-white/70 mt-2 text-base md:text-sm sm:text-xs leading-relaxed">
                {locale === 'ar' ? item.SubtitleAr : item.Subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorksData
