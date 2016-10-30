import React, { PropTypes } from 'react'
import OrderList from 'components/OrderList'
import paginate from 'components/utils/Pagination/paginate'

const ListView = ({ items, total, pageNumber, pageSize }) => {
  const options = {
    url: '/orders',
    pageNumber,
    total,
    pageSize
  }
  const List = paginate(OrderList, options)
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-4">All orders ({total})</h2>
        <List orders={items} count={total} />
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
