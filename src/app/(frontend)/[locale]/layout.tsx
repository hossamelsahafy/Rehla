import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import NavBar from './_components/NavBar/NavBar'
import Footer from './_components/Footer/PartOne'
import '../globals.css'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params
  const messages = await getMessages({ locale })

  if (!['en', 'ar'].includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="icon" href="/Logo/Logo.png" type="image/png" />
      </head>
      <body
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const { locale } = await params

  const siteTitle = locale === 'ar' ? 'رحلة' : 'Rehla'

  const descriptionByLocale: Record<string, string> = {
    en: '',
    ar: '',
  }

  const ogLocale = locale === 'ar' ? 'ar_EG' : 'en_US'

  return {
    title: {
      default: siteTitle,
      template: `${siteTitle} - %s`,
    },
    description: descriptionByLocale[locale],
    alternates: {
      languages: {
        en: '/en',
        ar: '/ar',
      },
      canonical: `/${locale}`,
    },
    openGraph: {
      title: siteTitle,
      description: descriptionByLocale[locale],
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: '/icon.png',
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: descriptionByLocale[locale],
      // images: ['/Main.png'],
    },
    icons: {
      icon: [{ url: '/icon.png' }],
    },
  }
}
