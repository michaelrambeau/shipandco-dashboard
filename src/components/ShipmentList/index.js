import React, { PropTypes } from 'react'
import { browserHistory as history } from 'react-router'
import tinytime from 'tinytime'
import get from 'lodash.get'

import TimeAgo from 'components/utils/TimeAgo'
import Flag from 'components/utils/Flag'
import CarrierIcon from 'components/utils/CarrierIcon'
import ShopIcon from 'components/utils/ShopIcon'
import Amount from 'components/utils/Amount'
import LabelStatus from './LabelStatus'

const templates = {
  full: tinytime('{MM} {DD} {H}:{mm}', {
    padMonth: true,
    padDays: true,
  }),
  timeOnly: tinytime('{H}:{mm}'),
  invoiceDate: tinytime('{MM} {DD}', {
    padMonth: true,
    padDays: true,
  }),
}

function shipmentDate(date) {
  const today = new Date()
  const sameDay =
    today.getDay() === date.getDay() && today.getMonth() === date.getMonth()
  const template = sameDay ? templates.timeOnly : templates.full
  return template.render(date)
}

const defaultOptions = {
  showIcon: true,
  showRate: true,
  showHeader: true,
  compact: false,
  showLabelStatus: true,
  showBillingStatus: true,
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
              {options.showLabelStatus && <th>Label</th>}
              {options.showBillingStatus && <th>Invoice</th>}
              {options.showRate && <th>Rate</th>}
              <th>Date</th>
            </tr>
          </thead>}
        <tbody
          style={{ borderTop: options.showHeader ? '' : '1px solid #dbdbdb' }}
        >
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
      {options.showLabelStatus &&
        <td>
          <LabelStatus shipment={shipment} />
        </td>}
      {options.showBillingStatus &&
        <td>
          <BillingIcon shipment={shipment} />
        </td>}
      {options.showRate &&
        <td>
          <Amount
            value={shipment.shipment_infos.amount}
            currency={shipment.shipment_infos.currency}
          />
        </td>}
      <td>
        {!options.compact &&
          <div>
            <TimeAgo datetime={shipment.date} />
          </div>}
        {shipmentDate(new Date(shipment.date))}
      </td>
    </tr>
  )
}

const BillingIcon = ({ shipment }) => {
  const { meta } = shipment
  if (!meta) return null
  const { invoiced_at, free } = meta
  if (invoiced_at)
    return (
      <div>
        <span className="fa fa-check-square light-text" />{' '}
        {templates.invoiceDate.render(new Date(invoiced_at))}
      </div>
    )
  if (free)
    return (
      <div>
        <span className="fa fa-gift light-text" /> Free!
      </div>
    )
  return null
}

Row.propTypes = {
  shipment: PropTypes.object.isRequired,
}
