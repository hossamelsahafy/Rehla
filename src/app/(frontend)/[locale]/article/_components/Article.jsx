'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'

const Article = () => {
  const [data, setData] = useState(null)
  const { locale } = useParams()
  useEffect(() => {
    const stored = localStorage.getItem('selectedPost')
    if (stored) {
      setData(JSON.parse(stored))
    }
  }, [])
  console.log(data)
  if (!data) {
    return (
      <div className="w-full h-screen flex justify-center items-start text-white">
        Loading article...
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-5 justify-center text-TextColor font-medium">
      <div className="w-full h-[300px] overflow-hidden rounded-2xl shadow-lg">
        <img src={data.image.url} alt={data.title} className="w-full h-full object-cover" />
      </div>

      <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-4">
        {locale === 'en' ? data.title : data.titleAr}
      </h1>

      {locale === 'ar' && data.PostDesAr && (
        <RichText data={data.PostDesAr} className="text-start rich-text" />
      )}
      {locale === 'en' && data.PostDes && (
        <RichText data={data.PostDes} className="text-start rich-text" />
      )}
    </div>
  )
}

export default Article
