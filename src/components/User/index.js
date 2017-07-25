import React from 'react'
import get from 'lodash.get'

import Carriers from './Carriers'
import Profile from './Profile'
import Tabs from './Tabs'

const User = ({ user }) => {
  if (!user) return <div>Loading...</div>
  const onBoardingFlags = get(user, 'flags.onBoarding')
  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2 className="title is-3">
        {user.emails[0].address}
        {user.freeShipments > 0 &&
          <div
            className={`tag is-large${user.freeShipments === 10
              ? ''
              : 'is-info'}`}
            style={{ marginLeft: '.5rem' }}
          >
            {user.freeShipments} free shipments remaining
          </div>}
      </h2>
    </div>
  )
}

export default User
