import React, { PropTypes } from 'react'
import UserList from 'components/UserList'
import paginate from 'components/utils/Pagination/paginate'

function getCustomerName (item) {
  const name = item.profile && item.profile.name || item.emails[0].address
  return name.toLowerCase()
}

const ListView = ({ items, total, pageNumber, pageSize }) => {
  const options = {
    url: '/users',
    pageNumber,
    total,
    pageSize
  }
  const List = paginate(UserList, options)
  const users = items
    .map(item => Object.assign({}, item, {
      name: getCustomerName(item)
    }))
    .sort((a, b) => {
      return a.name > b.name ? 1 : -1
    })
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-4">All customers ({total})</h2>
        <List users={users} count={total} />
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
