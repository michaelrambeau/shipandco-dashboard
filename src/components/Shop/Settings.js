import React from 'react'

const settingsKeys = ['licenseKey']
const excludedKeys = ['warehouseId']

const Settings = ({ shop }) => (
  <div className="card">
    <header className="card-header">
      <h4 className="card-header-title">Settings</h4>
    </header>
    <div className="card-content">
      {shop && <KeyValueHash hash={shop.settings} />}
      {shop && shop.type === 'amazon' && <KeyValueHash hash={shop.data} />}
      {shop && <KeyValueHash hash={shop} keys={settingsKeys} />}
    </div>
  </div>
)

const KeyValueHash = ({ hash, keys }) => {
  if (!hash) return null
  const allKeys = keys || Object.keys(hash)
  if (allKeys.length === 0) return null
  return (
    <ul>
      {allKeys
        .filter(key => !excludedKeys.includes(key))
        .filter(key => hash[key] !== undefined)
        .map(key => (
          <li key={key}>
            {key}: {JSON.stringify(hash[key])}
          </li>
        ))}
    </ul>
  )
}

export default Settings
