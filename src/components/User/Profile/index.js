import React from 'react'
import get from 'lodash.get'

import Tabs from '../Tabs'
import ProfileView from './UserProfile'
import GoodCategories from './GoodCategories'
import OnBoarding from './OnBoarding'

export default ({ user }) => {
  const onBoardingFlags = get(user, 'flags.onBoarding')
  return (
    <div>
      <Tabs user={user} userId={user._id} activeTab="profile" />
      <div className="columns">
        <div className="column is-half-tablet">
          <ProfileView user={user} profile={user.profile} />
        </div>
        <div className="column is-half-tablet">
          <OnBoarding onBoardingFlags={onBoardingFlags} />
          <GoodCategories categories={user.settings.goodsCategories} />
        </div>
      </div>
    </div>
  )
}
