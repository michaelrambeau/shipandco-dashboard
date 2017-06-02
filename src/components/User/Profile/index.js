import React from 'react'
import Tabs from '../Tabs'

const ProfileView = ({ profile }) => (
  <div className="box">
    <div className="field">
      <label className="label">Name</label>
      <p className="control">
        {profile.name ? (
          <span>{profile.name}</span>
          ) : (
            <span className="empty">(Empty)</span>
        )}
      </p>
    </div>
    <div className="field">
      <label className="label">Language</label>
      <p className="control">
        {profile.name ? (
          <span>{profile.language}</span>
          ) : (
          <span className="empty">(Empty)</span>
        )}
      </p>
    </div>
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
