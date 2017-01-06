import React, { PropTypes } from 'react'
import OrderList from 'components/OrderList'
import Tabs from '../Tabs'
import paginate from 'components/utils/Pagination/paginate'

const View = ({ items, total, pageNumber, pageSize, loading, userId, user }) => {
  const options = {
    url: `/users/${userId}/orders`,
    pageNumber,
    total,
    pageSize
  }
  const List = paginate(OrderList, options)
  return (
    <div>
      <Tabs
        user={user}
        userId={user._id}
        activeTab="orders"
      />
      <List
        orders={items}
        count={10}
      />
    </div>
  )
}

View.propTypes = {
  // user: PropTypes.object.isRequired
}

export default View
