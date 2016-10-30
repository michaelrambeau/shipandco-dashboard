import React, { PropTypes } from 'react'
import ShipmentList from 'components/ShipmentList'
import paginate from 'components/utils/Pagination/paginate'

const ListView = ({ items, total, pageNumber, pageSize }) => {
  const options = {
    url: '/shipments',
    pageNumber,
    total,
    pageSize
  }
  const List = paginate(ShipmentList, options)
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-4">All shipments ({total})</h2>
        <List shipments={items} count={total} />
      </div>
    </section>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired
}

export default ListView
