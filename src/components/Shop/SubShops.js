import React from 'react'

const SubShops = ({ shops }) =>
  <div className="card" style={{ marginTop: '1rem' }}>
    <div className="card-header">
      <h3 className="card-header-title">
        Next Engine shops ({shops.length})
      </h3>
    </div>
    <div className="card-content">
      <div className="content">
        <ul style={{ margin: '0 1rem' }}>
          {shops.map(shop => <SubShop key={shop.shop_id} shop={shop} />)}
        </ul>
      </div>
    </div>
  </div>

const SubShop = ({ shop }) => {
  const name = shop.shop_name
  const type = shop.shop_type
  const extra = type ? ` (${type})` : ''
  return (
    <li>
      {name}
      {extra}
    </li>
  )
}

export default SubShops
