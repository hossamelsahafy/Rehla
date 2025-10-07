'use client'
import Link from 'next/link'
import Image from 'next/image'

const DesktopNav = ({ locale, navLinks, switchPath, otherLocale, t }) => {
  return (
    <div
      className={`hidden mt-4 md:flex items-center w-full ${
        locale === 'ar' ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <Link href={`/${locale}`}>
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/Logo/Logo.png"
            width={118.41}
            height={33}
            alt="Logo"
            className="scale-75 my-1"
          />
          <p className="text-white font-playfair text-2xl italic font-bold">
            {locale === 'en' ? 'REHLA' : 'رحلة'}
          </p>
        </div>
      </Link>

      <div className="flex flex-1 justify-center">
        <div className="flex gap-6 font-jost rounded-lg">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`/${locale}${link.href}`}
              className="text-white hover:font-playfair hover:italic hover:text-hover transition-all duration-150  group font-normal hover:font-bold text-base"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={switchPath}
            className="font-semibold hover:italic cursor-pointer hover:font-playfair hover:text-hover transition-all duration-300"
          >
            {otherLocale.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DesktopNav
