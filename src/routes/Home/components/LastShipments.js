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
    <div style={{ display: 'flex' }}>
      <h4 className="title is-4" style={{ flexGrow: '1' }}>
        Last {count} shipments
      </h4>
      <button className="button" type="button" onClick={onRefresh}>
        <span className="icon">
          <i className="fa fa-refresh light-text" />
        </span>
      </button>
    </div>
    <ShipmentList shipments={shipments} options={options} count={count} />
    <div style={{ textAlign: 'center' }}>
      <Link to="/shipments">View all shipments</Link>
    </div>
  </div>

export default LastShipments
