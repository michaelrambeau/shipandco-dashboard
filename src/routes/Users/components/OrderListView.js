import React, { PropTypes } from 'react'
import OrderList from 'components/OrderList'
import paginate from 'components/utils/Pagination/paginate'
import Loading from 'components/utils/Loading'
import Tabs from 'components/User/Tabs'

const OrderListView = ({ user, items, total, pageNumber, pageSize, loading }) => {
  const options = {
    url: `/users/${user._id}/orders`,
    pageNumber,
    total,
    pageSize
  }
  const List = paginate(OrderList, options)
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Tabs
            userId={user._id}
            activeTab="orders"
            user={user}
          />
          <List orders={items} count={total} />
        </div>
      )}
    </div>
  )
}

OrderListView.propTypes = {
  user: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}

export default OrderListView