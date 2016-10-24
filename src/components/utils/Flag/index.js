import React from 'react'
import './style.css'
// import blank from './blank.gif'

export default ({ countryCode }) => (
  <img src="/blank.gif" className={`flag flag-${countryCode.toLowerCase()}`} alt={countryCode} />
)
