import React from 'react'
import get from 'lodash.get'
import ShopIcon from 'components/utils/ShopIcon'
import UserList from 'components/UserList'
import OrderList from 'components/OrderList'
import ShipmentList from 'components/ShipmentList'
import WarehouseList from 'components/WarehouseList'
import Settings from './Settings'
import SubShops from './SubShops'

const viewOptions = {
  showOptions: false,
}

const ViewWarehouse = ({ warehouse }) =>
  warehouse.deleted ? (
    <div>The linked warehouse ({warehouse._id}) has been deleted</div>
  ) : (
    <WarehouseList warehouses={[warehouse]} />
  )

const Shop = ({ shop }) => {
  const users = [shop.user]
  const orders = get(shop, 'orders.data') || []
  const orderCount = get(shop, 'orders.total') || 0
  const shipments = get(shop, 'shipments.data') || []
  const shipmentCount = get(shop, 'shipments.total') || 0
  return (
    <div>
      <h2 className="title is-4">
        <ShopIcon type={shop.type} /> Shop {shop.name}
      </h2>

      <Settings shop={shop} />

      {shop.shops && <SubShops shops={shop.shops} />}

      <br />

      <div className="card">
        <div className="card-header">
          <h3 className="card-header-title">Customer</h3>
        </div>
        <div className="card-content">
          {shop.user && users.length > 0 && <UserList users={users} />}
        </div>
      </div>

      <br />

      <div className="card">
        <div className="card-header">
          <h3 className="card-header-title">Warehouse</h3>
        </div>
        <div className="card-content">
          {shop.warehouse ? (
            <ViewWarehouse warehouse={shop.warehouse} />
          ) : (
            <div>No warehouse linked to this shop.</div>
          )}
        </div>
      </div>

      <br />

      <div className="card">
        <header className="card-header">
          <h3 className="card-header-title">Orders ({orderCount})</h3>
        </header>
        <div className="card-content">
          <OrderList orders={orders} count={orderCount} options={viewOptions} />
        </div>
      </div>

      <br />

      <div className="card">
        <header className="card-header">
          <h3 className="card-header-title">Shipments ({shipmentCount})</h3>
        </header>
        <div className="card-content">
          <ShipmentList
            shipments={shipments}
            count={shipmentCount}
            options={viewOptions}
          />
        </div>
      </div>
    </div>
  )
}

export default Shop
