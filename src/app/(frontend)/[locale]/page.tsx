import PhoneHeader from './_components/PhoneHeader/PhoneHeader'
import Works from './_components/Works/Works'
import VideoContent from './_components/VideoPage/VideoContent'
import ServedPlacesData from './_components/ServedPlaces/ServedPlacesData'
import Work from './_components/Work/Work'
import ServicesData from './_components/Services/ServicesData'
import News from './_components/News/News'
import Contact from './_components/ContactUs/Contact'
import LoadingWrapper from './_components/LoadingWrapper'
export default function Home() {
  return (
    <main className="relative">
      <PhoneHeader />
      <Works />
      <VideoContent />
      <ServedPlacesData />
      <Work />
      <ServicesData />
      <News />
      <Contact />
    </main>
  )
}
