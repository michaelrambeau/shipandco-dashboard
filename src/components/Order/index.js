import React from 'react'
import get from 'lodash.get'

import AddressFrom from './AddressFrom'
import AddressTo from './AddressTo'
import ParcelList from './ParcelList'
import ProductList from './ProductList'
import OrderShipmentHeader from 'components/utils/OrderShipmentHeader'

const Order = ({ order }) => {
  const products =
    get(order, 'order.shippingInfo.products') || order.products || []
  const parcels = get(order, 'shippingInfo.parcels') || []
  return (
    <div>
      <OrderShipmentHeader
        model="orders"
        record={order}
        title={`Order ${order && order.identifier}`}
      />
      <div className="columns">
        {order.data &&
          order.data.sender_address &&
          <div className="column is-half">
            <div className="card is-fullwidth">
              <div className="card-header">
                <div className="card-header-title">From</div>
              </div>
              <div className="card-content">
                <AddressFrom address={order.data.sender_address} />
              </div>
            </div>
          </div>}

        <div className="column is-half">
          <div className="card is-fullwidth">
            <div className="card-header">
              <div className="card-header-title">Shipping Address</div>
            </div>
            <div className="card-content">
              <AddressTo address={order.data.shipping_address} />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        {parcels.length > 0 &&
          <div className="column is-half">
            <div className="card is-fullwidth">
              <div className="card-header">
                <div className="card-header-title">Parcels</div>
              </div>
              <div className="card-content">
                <ParcelList parcels={order.shippingInfo.parcels} />
              </div>
            </div>
          </div>}

        {products.length > 0 &&
          <div className="column is-half">
            <div className="card is-fullwidth">
              <div className="card-header">
                <div className="card-header-title">Products</div>
              </div>
              <div className="card-content">
                <ProductList products={products} />
              </div>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Order
