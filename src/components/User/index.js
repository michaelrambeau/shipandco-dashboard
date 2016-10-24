import React from 'react'
import Carriers from './Carriers'
import Profile from './Profile'
import Tabs from './Tabs'

const User = ({ user, children }) => {
  if (!user) return <div>Loading...</div>
  return (
    <section className="section">
      <div className="container">
        <h3 className="title is-4">{user.emails[0].address}</h3>
        {children}
      </div>
    </section>
  )
}

export default User
