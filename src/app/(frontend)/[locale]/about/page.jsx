import React from 'react'
import AboutUs from './AboutUs'
export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'About us',
    ar: 'من نحن',
  }

  const descriptions = {
    en: '',
    ar: '',
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
    },
  }
}
const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  )
}

export default page
