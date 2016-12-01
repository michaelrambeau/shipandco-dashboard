import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TimeAgo from 'timeago-react'
import Flag from 'components/utils/Flag'
import CarrierIcon from 'components/utils/CarrierIcon'
import ShopIcon from 'components/utils/ShopIcon'
import Amount from 'components/utils/Amount'

const Table = ({ shipments, count }) => {
  if (!shipments || shipments.length === 0) return (
    <div>No shipment!</div>
  )
  return (
    <div>
      {false && <h4 className="title is-4">Shipments ({count})</h4>}
      <table className="table is-striped">
        <thead>
          <tr>
            <th />
            <th>Customer</th>
            <th>Tracking #</th>
            <th>Rate</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map(shipment => (
            <Row shipment={shipment} key={shipment._id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  shipments: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired
}
export default Table

const Row = ({ shipment }) => {
  return (
    <tr>
      <td width="52">
        <ShopIcon type={shipment.type} />
      </td>
      <td>
        <Link to={`/shipments/${shipment._id}`}>
          {shipment.customer_name}
        </Link>
        <br />
        <Flag countryCode={shipment.shipping_address.country_code} />
        {' '}
        {shipment.shipping_address.city}
        <div className="light-text">{shipment.identifier}</div>
      </td>
      <td>
        <CarrierIcon carrier={shipment.shipment_infos.carrier} />
        {shipment.shipment_infos.method && shipment.shipment_infos.method.toUpperCase()}
        <br />
        {shipment.shipment_infos.tracking_number}
        {false && <div className="light-text">
          {shipment.shipment_infos.service}
        </div>}
      </td>
      <td>
        <Amount value={shipment.shipping_paid} currency={shipment.currency} />
      </td>
      <td><TimeAgo datetime={shipment.date} /></td>
    </tr>
  )
}

Row.propTypes = {
  shipment: PropTypes.object.isRequired
}
