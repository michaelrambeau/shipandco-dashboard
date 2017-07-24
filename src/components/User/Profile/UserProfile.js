import React from 'react'
import tinytime from 'tinytime'

import Flag from 'components/utils/Flag'

const template = tinytime('{YYYY}/{Mo}/{DD}', {
  padMonth: true,
  padDays: true,
})

const languageSettings = {
  'ja-JP': {
    name: 'Japanese',
    flag: 'jp',
  },
  'en-UK': {
    name: 'English',
    flag: 'us',
  },
  'fr-FR': {
    name: 'French',
    flag: 'fr',
  },
}

const Language = ({ languageKey }) => {
  const settings = languageSettings[languageKey]
  if (!settings)
    return (
      <span>
        {languageKey}
      </span>
    )
  return (
    <span>
      <Flag countryCode={settings.flag} /> {settings.name}
    </span>
  )
}

const Item = ({ label, children }) =>
  <div className="field">
    <label className="label">
      {label}
    </label>
    <p className="control">
      {children}
    </p>
  </div>

const ItemValue = ({ value }) => {
  if (!value) return <span className="empty">(Empty)</span>
  return (
    <span>
      {value}
    </span>
  )
}

const formatDate = d => template.render(new Date(d))

const ProfileView = ({ user, profile }) =>
  <div className="box">
    <h3 className="title is-4">General</h3>
    <Item label="Email">
      {user.emails[0].address}
    </Item>
    {profile.name &&
      <Item label="Name">
        {profile.name}
      </Item>}
    {profile.language &&
      <Item label="Language">
        <Language languageKey={profile.language} />
      </Item>}
    <Item label="Registration date">
      {formatDate(user.createdAt)}
    </Item>
    {user.lastLogin &&
      <Item label="Last login">
        {formatDate(user.lastLogin)}
      </Item>}
  </div>

export default ProfileView
