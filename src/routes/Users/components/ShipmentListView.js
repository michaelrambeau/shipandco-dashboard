import React, { PropTypes } from 'react'
import ShipmentList from 'components/ShipmentList'
import paginate from 'components/utils/Pagination/paginate'
import Loading from 'components/utils/Loading'
import Tabs from 'components/User/Tabs'

const ShipmentListView = ({ user, items, total, pageNumber, pageSize, loading }) => {
  const options = {
    url: `/users/${user._id}/shipments`,
    pageNumber,
    total,
    pageSize
  }
  const List = paginate(ShipmentList, options)
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Tabs
            userId={user._id}
            activeTab="shipments"
            user={user}
          />
          <List shipments={items} count={total} />
        </div>
      )}
    </div>
  )
}

ShipmentListView.propTypes = {
  user: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}

export default ShipmentListView