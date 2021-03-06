import React, { PropTypes } from 'react'

import UserList from 'components/UserList'
import paginate from 'components/utils/Pagination/paginate'
import Loading from 'components/utils/Loading'
import filterList from './filterList'

function getCustomerName(item) {
  const name = (item.profile && item.profile.name) || item.emails[0].address
  return name.toLowerCase()
}

const ListView = ({ items, total, pageNumber, pageSize, loading }) => {
  const options = {
    url: '/users',
    pageNumber,
    total,
    pageSize,
  }
  const filteredUserList = filterList(UserList)
  const List = paginate(filteredUserList, options)
  const users = items.map(item =>
    Object.assign({}, item, {
      name: getCustomerName(item),
    })
  )
  return (
    <section className="section">
      <div className="container">
        {loading
          ? <Loading />
          : <div>
              <h2 className="title is-3" key="title">
                All customers <span className="light-text">({total})</span>
              </h2>
              <List users={users} count={total} key="list-users" />
            </div>}
      </div>
    </section>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default ListView
