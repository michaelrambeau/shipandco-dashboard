import React from 'react'
import { Link } from 'react-router'
import numeral from 'numeral'
import { browserHistory as history } from 'react-router'

import TimeAgo from 'components/utils/TimeAgo'
import groupUsers from './groupUsers'

function goToUser(user) {
  return () => history.push(`/users/${user._id}`)
}

const TopUsers = ({ users }) => {
  const groups = users ? groupUsers(users).slice(0, 10) : []
  return (
    <div className="box">
      <div className="title is-4">Top 10 Customers</div>
      <div className="subtitle is-6">By number of shipment</div>
      <hr />
      <UserGroupList groups={groups} />
      <div style={{ textAlign: 'center' }}>
        <Link to="/users">View all users</Link>
      </div>
    </div>
  )
}

const UserGroupList = ({ groups }) =>
  <div>
    {groups.map((group, i) =>
      <UserGroup key={group.key} group={group} ranking={i + 1} />
    )}
  </div>

const UserGroup = ({ group, ranking }) =>
  <div>
    <div
      style={{ display: 'flex', marginBottom: '.2rem', alignItems: 'center' }}
    >
      <span className="tag is-primary" style={{ marginRight: '.3rem' }}>
        #{ranking}
      </span>
      <span style={{ flexGrow: '1', fontSize: '1.2rem' }}>
        {!!group.name && group.name}
      </span>
      {group.members.length > 1 &&
        <span className="empty">
          {`Total: ${numeral(group.total).format('0,0')}`}
        </span>}
    </div>
    <UserTable users={group.members} />
  </div>

const UserTable = ({ users }) =>
  <table className={`table is-bordered clickable`}>
    <tbody>
      {users.map((user, i) =>
        <UserTableRow user={user} key={user._id} ranking={i + 1} />
      )}
    </tbody>
  </table>

const UserTableRow = ({ user, ranking }) =>
  <tr onClick={goToUser(user)}>
    <td>
      {user.email}
      <div className="light-text">
        Last shipment: <TimeAgo datetime={user.lastShipment} />
      </div>
    </td>
    <td width="80" style={{ textAlign: 'right' }}>
      {numeral(user.count).format('0,0')}
    </td>
  </tr>

export default TopUsers
