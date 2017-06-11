import React from 'react'

const Item = ({ label, children }) => (
  <div className="field">
    <label className="label">{label}</label>
    <p className="control">{children}</p>
  </div>
)

const ItemValue = ({ value }) => {
  if (!value) return <span className="empty">(Empty)</span>
  return (
    <span>{value}</span>
  )
}

const formatDate = str => (new Date(str)).toString()

const ProfileView = ({ user, profile }) => (
  <div className="box">
    <h3 className="title is-4">General</h3>
    <Item label="Email">{user.emails[0].address}</Item>
    <Item label="Name">{profile.name}</Item>
    <Item label="Name">{profile.language}</Item>
    <Item label="Registration date">{formatDate(user.createdAt)}</Item>
    <Item label="Last login">{formatDate(user.lastLogin)}</Item>
  </div>
)

export default ProfileView
