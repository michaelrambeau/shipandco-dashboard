import React from 'react'
import { Link } from 'react-router'
import TimeAgo from 'timeago-react'
import Flag from 'components/utils/Flag'
import Amount from 'components/utils/Amount'
import ShopIcon from 'components/utils/ShopIcon'

export default ({ orders, count }) => {
  if (!orders || orders.length === 0) return (
    <div>No order!</div>
  )
  return (
    <div>
      <table className="table is-striped">
        <thead>
          <tr>
            <th />
            <th>Customer</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter(order => !!order.data)
            .map(order => (
            <Row order={order} key={order._id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Row = ({ order }) => {
  return (
    <tr>
      <td width="52">
        <ShopIcon type={order.type} />
      </td>
      <td>
        <Link to={`/orders/${order._id}`}>
          {order.customerName}
        </Link>
        <br />
        <Flag countryCode={order.data.shipping_address.country_code} />
        {' '}
        {order.data.shipping_address.city}
        <div className="light-text">
          {order.identifier}
        </div>
      </td>
      <td>
        <Amount value={order.data.total_price} currency={order.data.currency} />
      </td>
      <td><TimeAgo date={order.date} /></td>
    </tr>
) }
