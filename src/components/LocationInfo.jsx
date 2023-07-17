import React from 'react'
import './LocationInfo.css'

const LocationInfo = ({location}) => {
    console.log(location)
  return (
    <div className="main-container">
      <article className='location-container'>
          <h1 className='location-title'>{location?.name}</h1>
          <ul className='location-list'>
              <li className='location-item'><span className='location-span'>Type: </span> {location?.type}</li>
              <li className='location-item'><span className='location-span'>Dimension: </span> {location?.dimension}</li>
              <li className='location-item'><span className='location-span'>Population: </span> {location?.residents.length} Persons</li>
          </ul>
      </article>
    </div>
  )
}

export default LocationInfo 