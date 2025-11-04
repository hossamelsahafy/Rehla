import React from 'react'
import Article from '../_components/Article'
import GetArticlesById from '../../_actions/GetArticlesById'
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
const page = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  const { id } = await params
  const data = await GetArticlesById(id)
  return (
    <div>
      <Article data={data} />
    </div>
  )
}

export default page
