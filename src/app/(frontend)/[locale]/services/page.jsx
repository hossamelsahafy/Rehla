import React from 'react'
import ServicesComp from './ServicesComp'
export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'Services',
    ar: 'خدماتنا',
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
    <div className="">
      <ServicesComp />
    </div>
  )
}

export default page
