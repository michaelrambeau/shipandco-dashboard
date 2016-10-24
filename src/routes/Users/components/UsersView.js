import React from 'react'
import UserList from 'components/UserList'

export const View = ({ users }) => {
  return (
    <section className="section">
      <div className="container">
      <h4 className="title is-4">
        All customers ({users.length})
      </h4>
      <UserList users={users} />
      </div>
    </section>
  )
}

export default View
