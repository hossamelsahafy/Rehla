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
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/rehlamarketing?igsh=bHQ0eDk3MXQwY2F0&utm_source=qr',
  },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/rehla-marketing-agency/' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/share/16xhjLWB9M/?mibextid=wwXIfr' },
]
const PartOne = () => {
  const t = useTranslations('Footer')
  const offices = [
    {
      city: 'Riyadh Office',
      cityAr: 'مكتب الرياض',
      address: 'Office 86, 25 Square Building, Anas Ibn Malek, Al Yasmeen Dist., Riyadh',
      addressAr: 'المكتب 86، مبنى 25 سكوير، أنس بن مالك، حي الياسمين، الرياض',
      email: 'Rehlamarketing@gmail.com',
      phone: '+966564107629',
    },
  ]
  const { locale } = useParams()
  return (
    <>
      <div className="relative w-full">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
        <div className="w-full bg-white mx-auto flex flex-col justify-center gap-10 overflow-hidden p-4 relative z-0">
          <div className="flex mt-4 flex-col lg:flex-row justify-center gap-5 items-start lg:items-center">
            <img src="/Logo/Logob.png" alt="Logo" className="object-contain w-20" />

            <div>
              <p className="text-3xl leading-[40px] font-semibold text-[#333] max-md:text-[25px]">
                {t('localTalents')}
              </p>
              <p className="text-[22px] max-w-[709px] leading-[30px] text-[#333] max-md:text-[22px]">
                {t('teamsMena')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-items-center  lg:border-t  lg:border-t-des mt-10">
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
                <a
                  href={`https://wa.me/${o.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#841624] hover:underline mt-1"
                >
                  {o.phone}
                </a>
                <div className="lg:hidden md:border border-b border-des mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-black -mt-4 p-10 flex flex-col justify-center items-start relative z-0">
        <p className="font-bold text-base md:text-[22px] leading-[20px] text-white uppercase">
          {t('Follow')}
        </p>

        <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center mt-6 gap-6">
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

          <div className="flex items-center">
            <img src="/Logo/Logo.png" alt="Rehla logo" className="object-contain w-20" />
            <p className="italic text-white text-2xl">Rehla</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartOne
