import React, { PropTypes } from 'react'
import OrderList from 'components/OrderList'
import Tabs from '../Tabs'

const List = ({ user }) => (
  <div>
    <Tabs
      userId={user._id}
      activeTab="orders"
    />
    <OrderList
      orders={user.orders}
      count={user.orderCount}
    />
  </div>
)

List.propTypes = {
  user: PropTypes.object.isRequired
}

export default List
