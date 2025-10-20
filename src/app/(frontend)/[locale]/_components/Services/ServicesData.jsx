import React from 'react'
import GetServices from '../../_actions/getServices'
import Services from './Services'
const ServicesData = async () => {
  const backendData = await GetServices()
  return <Services backendData={backendData} />
}

export default ServicesData
