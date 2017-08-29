import React from 'react'

import visa from './visa.svg'
import mastercard from './mastercard.svg'
import amex from './amex.svg'

function getIcon(brand) {
  switch (brand) {
    case 'visa':
      return visa
    case 'mastercard':
      return mastercard
    case 'american express':
      return amex
  }
  return null
}

export default ({ brand, size = 32 }) => {
  const icon = getIcon(brand.toLowerCase())
  if (!icon)
    return (
      <span>
        {brand}
      </span>
    )
  return (
    <img
      src={icon}
      width={size}
      height={size}
      style={{ verticalAlign: 'middle', marginRight: '.5rem' }}
    />
  )
}
