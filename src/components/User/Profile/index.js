import React from 'react'
import Tabs from '../Tabs'

import ProfileView from './UserProfile'
import GoodCategories from './GoodCategories'

export default ({ user }) => (
  <div>
    <Tabs
      user={user}
      userId={user._id}
      activeTab="profile"
    />
    <div className="columns">
      <div className="column is-half-tablet">
        <ProfileView user={user} profile={user.profile} />
      </div>
      <div className="column is-half-tablet">
        <GoodCategories categories={user.settings.goodsCategories} />
      </div>
    </div>
  </div>
)
