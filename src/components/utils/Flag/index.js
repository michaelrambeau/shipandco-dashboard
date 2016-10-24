import React from 'react'
import './style.css'
// import blank from './blank.gif'

export default ({ countryCode }) => {
  if (!countryCode) return <span className="empty">-</span>
  return (
    <img
      src="/blank.gif"
      className={`flag flag-${countryCode.toLowerCase()}`}
      alt={countryCode}
    />
  )
}
