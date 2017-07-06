import React from 'react'

import OrderShipmentHeader from 'components/utils/OrderShipmentHeader'
import ShipmentInfo from './ShipmentInfo'
import AddressFrom from 'components/Order/AddressFrom'
import AddressTo from 'components/Order/AddressTo'

const Shipment = ({ shipment }) =>
  <div>
    <OrderShipmentHeader
      model="shipments"
      record={shipment}
      title={`Shipment ${shipment && shipment.identifier}`}
    />
    <ShipmentInfo data={shipment.shipment_infos} />
    <br />
    <div className="columns">
      {shipment.sender_address &&
        <div className="column is-half">
          <div className="card is-fullwidth">
            <div className="card-header">
              <div className="card-header-title">Sender Address</div>
            </div>
            <div className="card-content">
              <AddressFrom address={shipment.sender_address} />
            </div>
          </div>
        </div>}
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
  </div>

export default Shipment
