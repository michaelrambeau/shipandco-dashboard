import React from 'react'

const settingsKeys = ['licenseKey']

const Settings = ({ shop }) => (
  <div className="box">
    <h4 className="title is-5">Settings</h4>
    {shop && <KeyValueHash hash={shop.settings} />}
    {shop && <KeyValueHash hash={shop} keys={settingsKeys} />}
  </div>
)

const KeyValueHash = ({ hash, keys }) => {
  const allKeys = keys || Object.keys(hash)
  return (
    <ul>
      {allKeys
        .filter(key => !!hash[key])
        .map(key => (
          <li key={key}>{key}: {JSON.stringify(hash[key])}</li>
        ))
      }
    </ul>
  )
}

export default Settings
