import React from 'react'
import WorksComp from './WorksComp'
export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'Works',
    ar: 'الاعمال',
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
      <WorksComp />
    </div>
  )
}

export default page
