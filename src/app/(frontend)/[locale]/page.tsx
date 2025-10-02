'use client'
import { useTranslations } from 'next-intl'
import Works from './_components/Works/Works'
import PhoneHeader from './_components/PhoneHeader/PhoneHeader'
import VideoContent from './_components/VideoPage/VideoContent'
import ServedPlaces from './_components/ServedPlaces/ServedPlaces'
import Work from './_components/Work/Work'
import News from './_components/News/News'
export default function Home() {
  const t = useTranslations()

  return (
    <main className="">
      <PhoneHeader />
      <Works />
      <VideoContent />
      <ServedPlaces />
      <Work />
      <News />
    </main>
  )
}
