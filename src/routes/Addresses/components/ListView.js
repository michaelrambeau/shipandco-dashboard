import React from 'react'
import { Link } from 'react-router'
import get from 'lodash.get'
import uniq from 'lodash.uniq'

import Loading from 'components/utils/Loading'
import UserListAddress from 'components/UserList/UserListWithAddress'
import filterList from './filterAddressList'

const getEmail = user => user.emails[0].address.toLowerCase()
const getCompany = user =>
  get(user, 'settings.defaultWarehouse.address.company')

// Exclude shipandco test shops fromt the list
const excludedIds = [
  'h6C8nAgh3Qrw7ewhm',
  '5BRaimjkaipmN9kkr',
  'TKQyMJ67KkHMMCjzX',
  '5RMzd7nrswD4BKFqw',
]

const ListView = ({ items, total, pageNumber, pageSize, loading }) => {
  const users = items
    .filter(item => !excludedIds.includes(item._id))
    .sort(
      (a, b) =>
        getCompany(a).toLowerCase() > getCompany(b).toLowerCase() ? 1 : -1
    )
  const areas = uniq(
    users
      .map(user => get(user, 'settings.defaultWarehouse.address.province'))
      .sort((a, b) => (a > b ? 1 : -1))
  ).map(area => ({ text: area || 'Overseas', value: area }))

  const UserList = filterList(UserListAddress, { areas })
  return (
    <section className="section">
      <div className="container">
        {loading
          ? <Loading />
          : <div>
              <h2 className="title is-3">
                Customer Address Book{' '}
                <span className="light-text">({users.length})</span>
              </h2>
              <div className="subtitle is-5">
                Users with a warehouse. To see all users, go to the{' '}
                <Link to="/users">Customers</Link> page.
              </div>
              <UserList users={users} count={total} />
            </div>}
      </div>
    </section>
  )
}

export default ListView
