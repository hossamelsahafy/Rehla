import React from 'react'

const Work = ({ work, locale }) => {
  return (
    <div className="bg-project h-screen pb-[50px] xl:pb-[100px] relative text-TextColor">
      <div className="max-w-6xl mx-auto px-4 h-full flex justify-center items-center text-center">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-3xl font-semibold">{locale === 'en' ? work.Name : work.NameAr}</p>
              <p className="text-lg opacity-80 mb-4">
                {locale === 'en' ? work.Subtitle : work.SubtitleAr}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={work.image?.url}
                className=" w-96 sm:w-96 md:w-64 lg:w-80 xl:w-96 clibPath"
              />
            </div>
          </div>
          <p className="flex items-center mt-4">
            {locale === 'en' ? work.LongDes : work.LongDesAr}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Work
