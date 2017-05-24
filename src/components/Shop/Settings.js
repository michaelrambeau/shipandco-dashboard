import React from 'react'

const settingsKeys = ['licenseKey']

const Settings = ({ shop }) => (
  <div className="card">
    <header className="card-header">
      <h4 className="card-header-title">Settings</h4>
    </header>
    <div className="card-content">
      {shop && <KeyValueHash hash={shop.settings} />}
      {shop && <KeyValueHash hash={shop} keys={settingsKeys} />}
    </div>
  </div>
)

const KeyValueHash = ({ hash, keys }) => {
  const allKeys = keys || Object.keys(hash)
  return (
    <ul>
      {allKeys
        .filter(key => hash[key] !== undefined)
        .map(key => (
          <li key={key}>{key}: {JSON.stringify(hash[key])}</li>
        ))
      }
    </ul>
  )
}

export default Settings
