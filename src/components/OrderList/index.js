import React from 'react'
import { browserHistory as history } from 'react-router'
import tinytime from 'tinytime'

import TimeAgo from 'components/utils/TimeAgo'
import Flag from 'components/utils/Flag'
import Amount from 'components/utils/Amount'
import ShopIcon from 'components/utils/ShopIcon'

const defaultOptions = {
  showIcon: true,
}

const template = tinytime('{YYYY}/{Mo}/{DD} {H}:{mm}', {
  padMonth: true,
  padDays: true,
})

export default ({ orders, count, options = defaultOptions }) => {
  if (!orders || orders.length === 0) return <div>No order!</div>
  return (
    <div>
      <table className="table is-striped clickable">
        <thead>
          <tr>
            {options.showIcon && <th />}
            <th>Customer</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter(order => !!order.data)
            .map(order =>
              <Row order={order} key={order._id} options={options} />
            )}
        </tbody>
      </table>
    </div>
  )
}

const goToOrder = order => () => history.push(`/orders/${order._id}`)

const Row = ({ order, options }) => {
  return (
    <tr onClick={goToOrder(order)}>
      {options.showIcon &&
        <td width="52">
          <ShopIcon type={order.type} />
        </td>}
      <td>
        {order.customerName}
        <br />
        <Flag countryCode={order.data.shipping_address.country_code} />{' '}
        {order.data.shipping_address.city}
        <div className="light-text">{order.identifier}</div>
      </td>
      <td>
        <Amount value={order.data.total_price} currency={order.data.currency} />
      </td>
      <td>
        <TimeAgo datetime={order.date} />
        <br />
        {template.render(new Date(order.date))}
      </td>
    </tr>
  )
}
