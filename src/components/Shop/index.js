import React from 'react'
import get from 'lodash.get'
import ShopIcon from 'components/utils/ShopIcon'
import UserList from 'components/UserList'
import OrderList from 'components/OrderList'
import ShipmentList from 'components/ShipmentList'
import Settings from './Settings'

const Shop = ({ shop }) => {
  console.log('Shop', shop.settings)
  const users = [shop.user]
  const orders = get(shop, 'orders.data') || []
  const orderCount = get(shop, 'orders.total') || 0
  const shipments = get(shop, 'shipments.data') || []
  const shipmentCount = get(shop, 'shipments.total') || 0
  return (
    <div>
      <h2 className="title is-4">
        <ShopIcon type={shop.type} />
        {' '}
        Shop {shop.name}
      </h2>

      <Settings shop={shop} />

      <div className="box">
        <h3 className="title is-5">Customer</h3>
        {shop.user && users.length > 0 && <UserList users={users} />}
      </div>

      <div className="box">
        <h3 className="title is-5">Orders</h3>
        <OrderList orders={orders} count={orderCount} />
      </div>

      <div className="box">
        <h3 className="title is-5">Shipments</h3>
        <ShipmentList shipments={shipments} count={shipmentCount} />
      </div>      
    </div>
    )
}

export default Shop
