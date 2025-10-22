import React from 'react'
import { useTranslations } from 'next-intl'
const What = () => {
  const t = useTranslations('About')
  return (
    <div className="max-w-6xl text-TextColor mx-auto p-4 md:p-6 flex flex-col overflow-hidden gap-6 md:gap-8 lg:gap-10 mt-20 md:mt-30 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center sm:justify-start">
        <svg
          width="87"
          height="85"
          viewBox="0 0 87 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.183 64.7452H42.9649L50.8751 50.3525L58.1777 50.3525L50.183 64.7452ZM50.0894 33.8906L42.8713 33.8906L47.4356 50.3507L54.7382 50.3507L50.0894 33.8906Z"
            fill="#7272FD"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.578 19.8672H24.3599L16.3652 34.2599H19.8053L24.4535 50.7179H27.6748L19.965 64.7461H27.183L35.1777 50.3534H31.5705L31.57 50.3516H31.7383L27.0894 33.8915H23.8703L31.578 19.8672Z"
            fill="#CC4221"
          ></path>
          <path
            d="M43.36 50.7179H36.142L31.4932 34.2578H38.7958L43.36 50.7179Z"
            fill="white"
          ></path>
        </svg>
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
