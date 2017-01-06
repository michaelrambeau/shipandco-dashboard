import React, { PropTypes } from 'react'
import ShopList from 'components/ShopList'
import paginate from 'components/utils/Pagination/paginate'
import Loading from 'components/utils/Loading'

const ListView = ({ items, total, pageNumber, pageSize, loading }) => {
  const options = {
    url: '/shops',
    pageNumber,
    total,
    pageSize
  }
  const List = paginate(ShopList, options)
  return (
    <section className="section">
      <div className="container">
        {loading ? (
          <Loading />
        ) : ([
          <h2 className="title is-4">All shops ({total})</h2>,
          <List shops={items} count={total} />
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
