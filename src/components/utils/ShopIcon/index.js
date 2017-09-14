import React from 'react'

import shopify from './shopify.svg'
import manual from './manual.svg'
import amazon from './amazon.svg'
import rakuten from './rakuten.svg'
import ebay from './ebay.svg'
import prestashop from './prestashop.svg'
import base from './base.svg'
import nextengine from './nextengine.svg'
import magento1 from './magento1.svg'
import magento2 from './magento2.svg'
import stripe from './stripe.svg'
import woocommerce from './woocommerce.svg'

function getIcon(shopType) {
  switch (shopType) {
    case 'shopify':
      return shopify
    case 'rakuten':
      return rakuten
    case 'ebay':
      return ebay
    case 'amazon':
      return amazon
    case 'prestashop15':
      return prestashop
    case 'base':
      return base
    case 'nextengine':
      return nextengine
    case 'magento1':
      return magento1
    case 'magento2':
      return magento2
    case 'stripe':
      return stripe
    case 'woocommerce':
      return woocommerce
  }
  return manual
}

export default ({ type, size = 32 }) => {
  const icon = getIcon(type)
  const style = {
    verticalAlign: 'middle',
  }
  return <img src={icon} width={size} height={size} style={style} />
}
