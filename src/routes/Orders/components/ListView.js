import React, { PropTypes } from 'react'
import OrderList from 'components/OrderList'
import paginate from 'components/utils/Pagination/paginate'
import Loading from 'components/utils/Loading'

const ListView = ({ items, total, pageNumber, pageSize, loading }) => {
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
        {loading ? (
          <Loading />
        ) : ([
          <h2 key="title" className="title is-4">All orders ({total})</h2>,
          <List key="list" orders={items} count={total} />
        ])}
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
