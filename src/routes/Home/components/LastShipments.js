import React from 'react'
import ShipmentList from 'components/ShipmentList'

const options = {
  showHeader: false,
  showRate: false,
  showIcon: true,
  showHeader: false,
  compact: true,
}

const LastShipments = ({ shipments, onRefresh }) =>
  <div className="box">
    <div className="title is-4">
      <span style={{ marginRight: '1rem' }}>Last 10 shipments</span>
      <button className="button is-small" type="button" onClick={onRefresh}>
        Refresh
      </button>
    </div>
    <ShipmentList shipments={shipments} options={options} count={10} />
  </div>

export default LastShipments
