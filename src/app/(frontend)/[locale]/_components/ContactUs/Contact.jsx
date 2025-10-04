'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Form from './Form'
import { useParams } from 'next/navigation'
const Contact = () => {
  const { locale } = useParams()
  const t = useTranslations('Contact')
  const form = t.raw('form')
  const buttons = t.raw('Buttons')
  const markets = t.raw('markets')
  const m = t('yourMessage')
  const s = t('selectMarket')
  return (
    <div className="relative w-full p-4 overflow-hidden text-white">
      <img
        src="/Contact/bg.png"
        className="absolute inset-0 w-full h-full object-cover blur-2xl brightness-50 scale-110"
        alt="background"
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      <div className="relative z-10 flex flex-col max-w-6xl mx-auto text-center items-center justify-center h-full">
        <div className="flex flex-row mt-10 ">
          <div className={`${locale === 'ar' ? 'scale-x-[-1]' : ''}`}>
            <svg
              width="36"
              height="33"
              viewBox="0 0 36 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00081 6.63021L4.28801 0.667969L15.2754 0.667969V6.63021H13.1263C11.0157 6.63406 9.30544 8.34581 9.30544 10.4572V32.308H1.00004V6.63021H1.00081Z"
                fill="white"
                stroke="white"
                strokeWidth="1.12093"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M20.3075 6.63021L23.5947 0.667969L34.582 0.667969V6.63021H32.4329C30.3223 6.63406 28.6121 8.34581 28.6121 10.4572V32.308H20.3067V6.63021H20.3075Z"
                fill="white"
                stroke="white"
                strokeWidth="1.12093"
                strokeMiterlimit="10"
              ></path>
            </svg>
          </div>
          <p className="font-jost p-4 font-medium text-2xl lg:text-4xl leading-[40px] text-white max-md:text-base">
            {t('title')}
          </p>
          <div
            className={`flex-shrink-0 self-end ${locale === 'ar' ? 'scale-x-[1]' : 'scale-x-[-1]'}`}
          >
            <svg
              width="36"
              height="33"
              viewBox="0 0 36 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00081 6.63021L4.28801 0.667969L15.2754 0.667969V6.63021H13.1263C11.0157 6.63406 9.30544 8.34581 9.30544 10.4572V32.308H1.00004V6.63021H1.00081Z"
                fill="white"
                stroke="white"
                strokeWidth="1.12093"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M20.3075 6.63021L23.5947 0.667969L34.582 0.667969V6.63021H32.4329C30.3223 6.63406 28.6121 8.34581 28.6121 10.4572V32.308H20.3067V6.63021H20.3075Z"
                fill="white"
                stroke="white"
                strokeWidth="1.12093"
                strokeMiterlimit="10"
              ></path>
            </svg>
          </div>
        </div>
        <p className="font-jost p-4 font-medium text-xl lg:text-2xl leading-[40px] text-white max-md:text-base">
          {t('description')}
        </p>
        <Form form={form} buttons={buttons} market={markets} submit={t('submit')} m={m} s={s} />
      </div>
    </div>
  )
}

export default Contact
