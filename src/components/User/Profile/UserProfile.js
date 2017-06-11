import React from 'react'

const ProfileView = ({ user, profile }) => (
  <div className="box">
    <h3 className="title is-4">General</h3>
    <div className="field">
      <label className="label">Email</label>
      <p className="control">{user.emails[0].address}</p>
    </div>
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

export default ProfileView
