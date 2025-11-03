import React from 'react'
import Article from '../_components/Article'
export async function generateMetadata({ params }) {
  const { locale } = await params

  const titles = {
    en: 'Article',
    ar: 'مقال',
  }

  return {
    title: titles[locale],
    openGraph: {
      title: titles[locale],
    },
  }
}
const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  return (
    <div>
      <Article />
    </div>
  )
}

export default page
