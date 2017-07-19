import React from 'react'
import numeral from 'numeral'
import { browserHistory as history } from 'react-router'

function goToUser(user) {
  return () => history.push(`/users/${user._id}`)
}

const TopUsers = ({ users }) => {
  const userList = users.slice(0, 20)
  return (
    <div className="box">
      <div className="title is-4">Top 20 Users</div>
      <table className={`table is-striped clickable`}>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Shipments</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) =>
            <Row user={user} key={user._id} ranking={i + 1} />
          )}
        </tbody>
      </table>
    </div>
  )
}

const Row = ({ user, ranking }) =>
  <tr onClick={goToUser(user)}>
    <td>
      #{ranking}
    </td>
    <td>
      {user.email}
    </td>
    <td>
      {numeral(user.count).format('0a')}
    </td>
  </tr>

export default TopUsers
