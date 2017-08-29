import React from 'react'
import { Link } from 'react-router'
import get from 'lodash.get'
import uniq from 'lodash.uniq'

import Loading from 'components/utils/Loading'
import UserListAddress from 'components/UserList/UserListWithAddress'
import filterList from './filterAddressList'
import getArea from './getArea'

const getEmail = user => user.emails[0].address.toLowerCase()
const getCompany = user => {
  const names = [
    get(user, 'settings.defaultWarehouse.address.company') || '',
    get(user, 'settings.defaultWarehouse.address.name') || '',
  ].filter(item => !!item.trim())
  return Array.isArray(names) ? names[0] || '' : ''
}

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
    users.map(getArea).sort((a, b) => (a > b ? 1 : -1))
  ).map(area => ({ text: area || '(Empty)', value: area }))

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
