import React from 'react'
import { useTranslations } from 'next-intl'
const What = () => {
  const t = useTranslations('About')
  return (
    <div className="max-w-6xl text-TextColor mx-auto p-4 md:p-6 flex flex-col overflow-hidden gap-6 md:gap-8 lg:gap-10 mt-20 md:mt-30 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center sm:justify-start">
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-semibold leading-tight md:leading-[105px]  text-center sm:text-left">
          {t('what')}
        </p>
      </div>
      <div className="flex justify-center  items-center">
        <p className="futura text-[45px] leading-[55px] text-center  md:max-w-[839px] max-md:text-[22px] max-md:leading-[28px]">
          {t('paraThree')}
        </p>
      </div>
    </div>
  )
}

export default What
