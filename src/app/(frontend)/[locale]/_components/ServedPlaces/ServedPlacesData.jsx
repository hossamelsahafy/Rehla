import GetServedPlaces from '../../_actions/GetServedPlaces'
import ServedPlaces from './ServedPlaces'
import React from 'react'

const ServedPlacesData = async () => {
  const sliders = await GetServedPlaces()
  return <ServedPlaces sliders={sliders} />
}

export default ServedPlacesData
