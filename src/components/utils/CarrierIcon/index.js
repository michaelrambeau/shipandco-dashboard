import React from 'react'

import dhl from './dhl.svg'
import fedex from './fedex.svg'
import ups from './ups.svg'
import japanpost from './japanpost.svg'
import yuupack from './yuupack.svg'
import yamato from './yamato.svg'

function getIcon (carrier) {
  switch (carrier) {
    case 'dhl':
      return dhl
    case 'fedex':
      return fedex
    case 'ups':
      return ups
    case 'japanpost':
      return japanpost
    case 'yuupack':
      return yuupack
    case 'yamato':
      return yamato
  }
  return null
}

export default ({ carrier, size = 32 }) => {
  const icon = getIcon(carrier)
  if (!icon) return <span>{carrier}</span>
  return (
    <img src={icon} width={size} height={size} style={{ verticalAlign: 'middle', marginRight: '.5rem' }} />
  )
}
