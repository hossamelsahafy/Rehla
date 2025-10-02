'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaVimeo,
} from 'react-icons/fa6'

const links = [
  { icon: <FaXTwitter />, href: '#' },
  { icon: <FaTiktok />, href: '#' },
  { icon: <FaInstagram />, href: '#' },
  { icon: <FaLinkedin />, href: '#' },
  { icon: <FaFacebook />, href: '#' },
  { icon: <FaYoutube />, href: '#' },
  { icon: <FaVimeo />, href: '#' },
]
const PartOne = () => {
  const t = useTranslations('Footer')
  const offices = [
    {
      city: 'Dubai Office',
      cityAr: 'مكتب دبي',
      address: 'Office 704, Publishing Pavilion, Production City',
      addressAr: 'المكتب 704، جناح النشر، مدينة الإنتاج',
      email: 'dubai@kijamii.com',
    },
    {
      city: 'Riyadh Office',
      cityAr: 'مكتب الرياض',
      address: 'Office 86, 25 Square Building, Anas Ibn Malek, Al Yasmeen Dist., Riyadh',
      addressAr: 'المكتب 86، مبنى 25 سكوير، أنس بن مالك، حي الياسمين، الرياض',
      email: 'riyadh@kijamii.com',
    },
    {
      city: 'Cairo Office',
      cityAr: 'مكتب القاهرة',
      address: '13 Road 314, New Maadi, Cairo, Egypt',
      addressAr: '١٣ شارع ٣١٤، المعادي الجديدة، القاهرة، مصر',
      email: 'cairo@kijamii.com',
    },
  ]
  const { locale } = useParams()
  return (
    <>
      <div className="w-full bg-white mx-auto flex flex-col  justify-center gap-10 overflow-hidden p-4">
        <div className="flex mt-4 flex-col lg:flex-row justify-center gap-10 items-start lg:items-center">
          <svg
            width="116"
            height="114"
            viewBox="0 0 116 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-md:size-[50px]"
          >
            <g clipPath="url(#clip0_2104_52026)">
              <path
                d="M67.8929 113.983H0.000244141L16.5002 53.5H29.5002L0.000244141 0H67.8929L91.5557 57.6447L67.8929 113.983Z"
                fill="#B6FE00"
              ></path>
              <path
                d="M29.2995 53.3749L0.000209808 0H26.7343L56.3477 53.3749H43.5425L26.7343 114H0.000209808L16.4909 53.3749H29.2995Z"
                fill="#1D1D1F"
              ></path>
              <path
                d="M88.9518 53.3749L59.6526 0H86.3866L116 53.3749H103.195L86.3866 114H59.6526L76.1432 53.3749H88.9518Z"
                fill="#1D1D1F"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_2104_52026">
                <rect
                  width="116"
                  height="114"
                  fill="white"
                  transform="matrix(-1 0 0 1 116 0)"
                ></rect>
              </clipPath>
            </defs>
          </svg>

          <div>
            <p className="text-3xl leading-[40px] font-semibold text-[#333] font-jost max-md:text-[25px]">
              {t('localTalents')}
            </p>
            <p className="text-[22px] max-w-[709px] leading-[30px] text-[#333] font-jost max-md:text-[22px]">
              {t('teamsMena')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:border-t  lg:border-t-[#7272FD] mt-10">
          {offices.map((o, idx) => (
            <div
              key={idx}
              className="p-6 lg:border-r lg:border-[#7272FD] lg:last:border-r-0 flex flex-col gap-3"
            >
              <h3 className="text-xl font-semibold text-[#333]">
                {locale === 'ar' ? o.cityAr : o.city}
              </h3>
              <p className="text-sm leading-relaxed text-[#333]">
                {locale === 'ar' ? o.addressAr : o.address}
              </p>
              <a href={`mailto:${o.email}`} className="text-blue-600 hover:underline mt-auto">
                {o.email}
              </a>
              <div className="lg:hidden md:border border-b border-[#7272FD] mt-auto" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-black -mt-4 p-10 flex flex-col justify-center items-start">
        <p className="font-playfair font-bold text-base md:text-[22px] leading-[20px] text-[#D4FF66] uppercase">
          {t('Follow')}
        </p>

        <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center mt-6 gap-6">
          {/* Social links */}
          <div className="flex flex-row flex-wrap gap-3 md:gap-5 justify-start">
            {links.map((l, i) => (
              <Link
                key={i}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border cursor-pointer p-2 md:p-4 text-base md:text-2xl text-white inline-flex items-center justify-center"
              >
                {l.icon}
              </Link>
            ))}
          </div>

          {/* Right text */}
          <p className="italic font-playfair text-white mt-2 text-2xl lg:mt-0">Rehla</p>
        </div>
      </div>
    </>
  )
}

export default PartOne
