import React from 'react'
import Carriers from './Carriers'
import Profile from './Profile'
import Tabs from './Tabs'

const User = ({ user }) => {
  if (!user) return <div>Loading...</div>
  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2 className="title is-3">{user.emails[0].address}</h2>
      {user.freeShipments && user.freeShipments > 0 && (
        <div className="notification is-primary">
          <b>{user.freeShipments}</b> free shipments
        </div>
      )}
    </div>
  )
}

export default User
