import React from 'react'
import { Link } from 'react-router'
import TimeAgo from 'timeago-react'

import ShopIcon from 'components/utils/ShopIcon'

const AlreadyShipped = ({ item }) => (
  <div>
    <h3 className="title is-4">
      <ShopIcon type={item.type} />
      {' '}
      Already shipped!
    </h3>
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">Order {item.identifier}</div>
      </div>
      <div className="card-content">
        <div className="field">
          <label className="label">Customer name</label>
          <div className="control">{item.customerName}</div>
        </div>
        <div className="field">
          <label className="label">Date</label>
          <div className="control">
            <TimeAgo datetime={item.date} />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <Link className="card-footer-item" to={`/shipments/${item.shipmentId}`}>
          Open the shipment
        </Link>
      </div>
    </div>
  </div>
)

export default AlreadyShipped
