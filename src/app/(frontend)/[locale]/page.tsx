import GetServices from './_actions/getServices'
import GetServedPlaces from './_actions/GetServedPlaces'
import HomeClient from './_components/HomeClient'

export default async function Page() {
  const [servicesData, logosData] = await Promise.all([GetServices(), GetServedPlaces()])

  return <HomeClient servicesData={servicesData} logosData={logosData} />
}
