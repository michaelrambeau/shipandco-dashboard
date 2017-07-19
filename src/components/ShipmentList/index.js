import React, { PropTypes } from 'react'
import { browserHistory as history } from 'react-router'
import tinytime from 'tinytime'
import get from 'lodash.get'

import TimeAgo from 'components/utils/TimeAgo'
import Flag from 'components/utils/Flag'
import CarrierIcon from 'components/utils/CarrierIcon'
import ShopIcon from 'components/utils/ShopIcon'
import Amount from 'components/utils/Amount'

const template = tinytime('{MM} {DD} {H}:{mm}', {
  padMonth: true,
  padDays: true,
})

const defaultOptions = {
  showIcon: true,
  showRate: true,
  showHeader: true,
  compact: false,
}

const goToShipment = shipment => () =>
  history.push(`/shipments/${shipment._id}`)

const Table = ({ shipments, count, options = defaultOptions }) => {
  if (!shipments || shipments.length === 0) return <div>No shipment!</div>
  return (
    <div>
      <table className="table is-striped clickable">
        {options.showHeader &&
          <thead>
            <tr>
              {options.showIcon && <th />}
              <th>Customer</th>
              <th>Tracking #</th>
              {options.showRate && <th>Rate</th>}
              <th>Date</th>
            </tr>
          </thead>}
        <tbody>
          {shipments.map(shipment =>
            <Row shipment={shipment} key={shipment._id} options={options} />
          )}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  shipments: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
}
export default Table

const Row = ({ shipment, options }) => {
  const method = (get(shipment, 'shipment_infos.method') || '').toUpperCase()
  const trackingNumber = get(shipment, 'shipment_infos.tracking_number') || ''
  return (
    <tr onClick={goToShipment(shipment)}>
      {options.showIcon &&
        <td width="52">
          <ShopIcon type={shipment.type} />
        </td>}
      <td>
        {shipment.customer_name}
        <br />
        <Flag countryCode={shipment.shipping_address.country_code} />{' '}
        {shipment.shipping_address.city}
        <div className="light-text">{shipment.identifier}</div>
      </td>
      <td>
        <CarrierIcon carrier={shipment.shipment_infos.carrier} />
        {!options.compact &&
          <div>
            <span>
              {method}
            </span>
            <br />
            <span>
              {trackingNumber}
            </span>
          </div>}
      </td>
      {options.showRate &&
        <td>
          <Amount
            value={shipment.shipment_infos.amount}
            currency={shipment.shipment_infos.currency}
          />
        </td>}
      <td>
        <TimeAgo datetime={shipment.date} />
        <br />
        {template.render(new Date(shipment.date))}
      </td>
    </tr>
  )
}

Row.propTypes = {
  shipment: PropTypes.object.isRequired,
}
