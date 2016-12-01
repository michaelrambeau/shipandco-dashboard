import React from 'react'

import shopify from './shopify.svg'
import manual from './manual.svg'
import amazon from './amazon.svg'
import rakuten from './rakuten.svg'
import ebay from './ebay.svg'
import prestashop from './prestashop.svg'
import base from './base.svg'

function getIcon (shopType) {
  switch (shopType) {
    case 'shopify':
      return shopify
    case 'rakuten':
      return rakuten
    case 'ebay':
      return ebay
    case 'prestashop15':
      return prestashop
    case 'base':
      return base
  }
  if (/amazon/.test(shopType)) return amazon
  return manual
}

export default ({ type, size = 32 }) => {
  const icon = getIcon(type)
  const style = {
    verticalAlign: 'middle'
  }
  return (
    <img src={icon} width={size} height={size} style={style} />
  )
}
