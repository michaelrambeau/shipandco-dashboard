import React, { PropTypes } from 'react'
import UserList from 'components/UserList'
import paginate from 'components/utils/Pagination/paginate'

const ListView = ({ items, total, pageNumber, pageSize }) => {
  const options = {
    url: '/users',
    pageNumber,
    total,
    pageSize
  }
  const List = paginate(UserList, options)
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-4">All customers ({total})</h2>
        <List users={items} count={total} />
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
