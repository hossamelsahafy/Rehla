import React from 'react'
import { useTranslations } from 'next-intl'
import DnaHeader from './DnaHeader'
const Dna = () => {
  const t = useTranslations('About')

  return (
    <div className="max-w-6xl  mx-auto p-4 md:p-6 flex flex-col text-TextColor overflow-hidden gap-6 md:gap-8 lg:gap-10 mt-20 md:mt-30 min-h-screen">
      <DnaHeader title={t('titleDna')} span={t('span')} />
      <div className="flex flex-row  justify-between gap-10 items-start">
        <p className="ld:max-w-[500px] max-w-1/2 text-[30px] leading-[50px] max-md:text-base max-md:leading-[25px]">
          {t('paraFour')}
        </p>
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-row items-center gap-5">
            <span>
              <svg
                width="30"
                height="55"
                viewBox="0 0 30 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block"
              >
                <path
                  d="M15.1792 26.0495L28.7028 1.44141L16.3638 1.44141L2.69531 26.0495H8.60652L16.3638 53.9992H28.7028L21.0904 26.0495H15.1792Z"
                  stroke="#EFEFEF"
                  strokeOpacity="0.2"
                  strokeWidth="1.11791"
                  strokeMiterlimit="10"
                />
                <path
                  d="M12.9429 27.0495L26.4664 2.44141L14.1275 2.44141L0.458984 27.0495H6.37019L14.1275 54.9992H26.4664L18.8541 27.0495H12.9429Z"
                  fill="#7272FD"
                />
              </svg>
            </span>

            <div className="flex flex-col justify-start items-start">
              <p className="text-xl lg:text-3xl leading-[32px]  max-md:text-sm max-md:leading-[17px]">
                {t('Entertainment')}
              </p>
              <p className="italic text-xl lg:text-3xl leading-[39px] max-md:text-sm max-md:leading-[20px]">
                {t('spantwo')}
              </p>
              <p className="text-xl lg:text-2xl leading-[32px]  font-light max-md:text-sm max-md:leading-[17px]">
                {t('three')}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <span>
              <svg
                width="30"
                height="55"
                viewBox="0 0 30 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block"
              >
                <path
                  d="M15.1792 26.0495L28.7028 1.44141L16.3638 1.44141L2.69531 26.0495H8.60652L16.3638 53.9992H28.7028L21.0904 26.0495H15.1792Z"
                  stroke="#EFEFEF"
                  strokeOpacity="0.2"
                  strokeWidth="1.11791"
                  strokeMiterlimit="10"
                />
                <path
                  d="M12.9429 27.0495L26.4664 2.44141L14.1275 2.44141L0.458984 27.0495H6.37019L14.1275 54.9992H26.4664L18.8541 27.0495H12.9429Z"
                  fill="#7272FD"
                />
              </svg>
            </span>
            <div className="flex flex-col ">
              <p className="text-xl lg:text-2xl leading-[32px]  max-md:text-sm">{t('four')}</p>
              <p className="text-xl lg:text-2xl leading-[39px] max-md:text-sm max-md:leading-[20px]">
                {t('five')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dna
