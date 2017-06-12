import React from 'react'
import ShopIcon from 'components/utils/ShopIcon'
import ShipmentInfo from './ShipmentInfo'
import AddressFrom from 'components/Order/AddressFrom'
import AddressTo from 'components/Order/AddressTo'
import OrderShipmentButtons from 'components/utils/OrderShipmentButtons'

const Shipment = ({ shipment }) => (
  <div>
    <h2 className="title is-4">
      <ShopIcon type={shipment.type} />
      {' '}
      Shipment {shipment.identifier}
    </h2>
    <ShipmentInfo data={shipment.shipment_infos} />
    <br />
    <div className="columns">
      {shipment.sender_address && (
        <div className="column is-half">
          <div className="card is-fullwidth">
            <div className="card-header">
              <div className="card-header-title">Sender Address</div>
            </div>
            <div className="card-content">
              <AddressFrom address={shipment.sender_address} />
            </div>
          </div>
        </div>
      )}
      <div className="column is-half">
        <div className="card is-fullwidth">
          <div className="card-header">
            <div className="card-header-title">Shipping Address</div>
          </div>
          <div className="card-content">
            <AddressTo address={shipment.shipping_address} />
          </div>
        </div>
      </div>
    </div>
    <OrderShipmentButtons record={shipment} model="shipments" />
  </div>
)

export default Shipment
