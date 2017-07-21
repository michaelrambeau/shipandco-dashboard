import React from 'react'
import { Link } from 'react-router'

import ShipmentList from 'components/ShipmentList'

const options = {
  showHeader: false,
  showRate: false,
  showIcon: true,
  showHeader: false,
  showLabelStatus: true,
  compact: true,
}

const count = 10

const LastShipments = ({ shipments, onRefresh }) =>
  <div className="box">
    <div className="title is-4">
      <span style={{ marginRight: '1rem' }}>
        Last {count} shipments
      </span>
      <button className="button is-small" type="button" onClick={onRefresh}>
        Refresh
      </button>
    </div>
    <ShipmentList shipments={shipments} options={options} count={count} />
    <div style={{ textAlign: 'center' }}>
      <Link to="/shipments">View all shipments</Link>
    </div>
  </div>

export default LastShipments
