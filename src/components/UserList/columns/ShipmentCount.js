import React from 'react'
import numeral from 'numeral'

import TimeAgo from 'components/utils/TimeAgo'

const ShipmentCount = ({ user }) => {
  const count = user.shipmentCount
  return user.lastShipment
    ? <div>
        <div>
          {numeral(count).format('0,0')} shipments
        </div>
        <TimeAgo datetime={user.lastShipment} />
      </div>
    : <span className="empty">No shipment</span>
}

export default ShipmentCount
