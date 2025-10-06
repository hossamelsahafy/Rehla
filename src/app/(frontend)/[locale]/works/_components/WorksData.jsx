import React from 'react'

const WorksData = ({ data, locale }) => {
  return (
    <div className="relative w-full">
      <div className="fixed mr-10 lg:mr-0 top-0 right-0 w-[80%] h-full pointer-events-none z-0 bg-[url('/WorkBg/projects.png')] bg-cover bg-repeat-y bg-center"></div>

      <div className="relative grid grid-cols-1 gap-2 p-6 md:p-8 sm:p-4">
        {data.map((item, i) => (
          <div
            key={i}
            className={`flex w-full flex-row items-center gap-8 mb-4
          ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}
        `}
          >
            <img
              src={item.Image}
              alt={item.Name}
              className={`w-[150px] h-[150px] md:w-[400px] md:h-[300px] sm:w-[300px] sm:h-[250px] object-fill rounded-lg flex-shrink-0 ${
                locale === 'en' ? 'clibPath' : 'clipPathAr'
              }`}
            />

            <div
              className={`flex flex-col max-w-lg md:max-w-md sm:max-w-full ${locale === 'en' ? 'text-left ' : 'text-right'} gap-2`}
            >
              <h3 className="text-white text-sm lg:text-lg md:text-lg font-semibold break-words">
                {locale === 'ar' ? item.NameAr : item.Name}
              </h3>
              <p className="text-white/70 text-sm md:text-sm sm:text-xs lg:text-lg leading-relaxed whitespace-nowrap">
                {locale === 'ar' ? item.SubtitleAr : item.Subtitle}
              </p>

              <h3 className="text-white text-sm md:text-lg font-semibold lg:text-lg break-words">
                {locale === 'ar' ? item.LocationAr : item.Location}
              </h3>
              <p className="text-white/70 text-sm md:text-sm sm:text-xs lg:text-lg leading-relaxed break-words">
                {locale === 'ar' ? item.ServicesAr : item.Services}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorksData
