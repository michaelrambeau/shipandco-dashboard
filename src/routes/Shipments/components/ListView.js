import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ShipmentList from 'components/ShipmentList'
import paginate from 'components/utils/Pagination/paginate'
import Loading from 'components/utils/Loading'
import CarrierSelector from 'components/utils/CarrierSelector'

const title = query => {
  if (Object.keys(query).length === 0) return 'All shipments'
  return `${query.carrier} shipments`
}

const ListView = ({ items, total, pageNumber, pageSize, loading, query }) => {
  const options = {
    url: '/shipments',
    pageNumber,
    query,
    total,
    pageSize
  }
  const List = paginate(ShipmentList, options)
  const carrier = query.carrier
  console.log('carrier', carrier);
  return (
    <section className="section">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h2 className="title is-4">All shipments ({total})</h2>
            <CarrierSelector
              baseUrl={'/shipments?'}
              current={carrier}
            />
            <List shipments={items} count={total} />
          </div>
        )}
      </div>
    </section>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}

export default ListView
