'use client'
import { useTranslations } from 'next-intl'
import Works from './_components/Works/Works'
import PhoneHeader from './_components/PhoneHeader/PhoneHeader'
import VideoContent from './_components/VideoPage/VideoContent'
export default function Home() {
  const t = useTranslations()

  return (
    <main className="">
      <PhoneHeader />
      <Works />
      <VideoContent />
    </main>
  )
}
