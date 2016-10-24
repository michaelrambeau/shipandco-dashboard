import React from 'react'
import AddressFrom from './AddressFrom'
import AddressTo from './AddressTo'
import ShopIcon from 'components/utils/ShopIcon'

const Order = ({ order }) => {
  // console.info('Order', order);
  return (
    <div>
      <h2 className="title is-4">
        <ShopIcon type={order.type} />
        {' '}
        Order #{order && order.identifier}
      </h2>
      <div className="columns">
        {order.data && order.data.sender_address && (
          <div className="column is-half">
            <div className="card is-fullwidth">
              <div className="card-header">
                <div className="card-header-title">From</div>
              </div>
              <div className="card-content">
                <AddressFrom address={order.data.sender_address} />
              </div>
            </div>
          </div>
        )}

        <div className="column is-half">
          <div className="card is-fullwidth">
            <div className="card-header">
              <div className="card-header-title">To</div>
            </div>
            <div className="card-content">
              <AddressTo address={order.data.shipping_address} />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-half">
          <div className="card is-fullwidth">
            <div className="card-header">
              <div className="card-header-title">Parcels</div>
            </div>
            <div className="card-content">
              ???
            </div>
          </div>
        </div>

        <div className="column is-half">
          <div className="card is-fullwidth">
            <div className="card-header">
              <div className="card-header-title">Options</div>
            </div>
            <div className="card-content">
              ???
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
