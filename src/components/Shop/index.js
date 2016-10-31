import React from 'react'
import ShopIcon from 'components/utils/ShopIcon'

const Shop = ({ shop }) => (
  <div>
    <h2 className="title is-4">
      <ShopIcon type={shop.type} />
      {' '}
      Shop {shop.name}
    </h2>
  </div>
)

export default Shop
