import React from 'react'
import { Link } from 'react-router'

import carriers from 'data/carriers'
const carrierItems = Object.keys(carriers)
  .map(key => ({
    id: key,
    ...carriers[key]
  }))

const CarrierSelector = ({ baseUrl, current }) => (
  <div className="tabs">
    <ul>
      <li className={!current ? 'is-active' : ''}>
        <Link to={`${baseUrl}`}>
          All carriers
        </Link>
      </li>
      {carrierItems.map(carrier =>
        <CarrierItem
          carrier={carrier}
          key={carrier.id}
          baseUrl={baseUrl}
          isActive={current === carrier.id}
        />
      )}
    </ul>
  </div>
)

const CarrierItem = ({ carrier, baseUrl, isActive }) => (
  <li className={isActive ? 'is-active' : ''}>
    <Link
      to={`${baseUrl}carrier=${carrier.id}`}
    >
      {carrier.shortName || carrier.name}
    </Link>
  </li>
)

export default CarrierSelector
