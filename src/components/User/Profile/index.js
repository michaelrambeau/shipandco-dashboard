import React from 'react'
import Tabs from '../Tabs'

const ProfileView = ({ profile }) => (
  <div>
    Name: {profile.name}
    <br />
    Language: {profile.language}
  </div>
)

export default ({ user }) => (
  <div>
    <Tabs
      user={user}
      userId={user._id}
      activeTab="profile"
    />
    <ProfileView profile={user.profile} />
  </div>
)
