import React from 'react'

import shopify from './shopify.svg'
import manual from './manual.svg'
import amazon from './amazon.svg'
import rakuten from './rakuten.svg'

function getIcon (shopType) {
  switch (shopType) {
    case 'shopify':
      return shopify
    case 'rakuten':
      return rakuten
    case 'amazon':
    case 'amazonfr':
      return amazon
  }
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
