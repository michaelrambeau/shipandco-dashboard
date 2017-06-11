import React from 'react'
import Carriers from './Carriers'
import Profile from './Profile'
import Tabs from './Tabs'

const User = ({ user }) => {
  if (!user) return <div>Loading...</div>
  return (
    <div>
      <h2 className="title is-3">{user.emails[0].address}</h2>
      <div className="notification is-success" style={{ marginBottom: '2rem' }}>
        <span className="fa fa-gift" />
        {' '}
        <b>{user.freeShipments}</b> free shipments
      </div>
    </div>
  )
}

export default User
