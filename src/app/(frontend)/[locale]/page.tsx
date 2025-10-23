import PhoneHeader from './_components/PhoneHeader/PhoneHeader'
import Works from './_components/Works/Works'
import VideoClient from './_components/VideoPage/VideoClient'
import ServedPlaces from './_components/ServedPlaces/ServedPlaces'
import Work from './_components/Work/Work'
import Services from './_components/Services/Services'
import News from './_components/News/News'
import Contact from './_components/ContactUs/Contact'
import GetServedPlaces from './_actions/GetServedPlaces'
import GetServices from './_actions/getServices'
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  const [sliders, backendData] = await Promise.all([GetServedPlaces(), GetServices()])
  return (
    <main className="relative">
      <PhoneHeader />
      <Works />
      <VideoClient />
      <ServedPlaces sliders={sliders} />
      <Work />
      <Services backendData={backendData} />
      <News />
      <Contact />
    </main>
  )
}
