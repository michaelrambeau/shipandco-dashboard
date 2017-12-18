import React from 'react'
import flatten from 'lodash.flatten'

import carriersByKey from 'data/carriers'
import shops from 'data/shops'
import groups from 'routes/Home/components/TopUsers/groups.json'

const users = flatten(
  groups.map(item =>
    item.members.map((member, i) => {
      const details = i > 0 ? ` (#${i + 1})` : ''
      return {
        text: `${item.name}${details}`,
        value: member,
      }
    })
  )
)
console.log({ users })

const carriers = Object.keys(carriersByKey).map(key => ({
  value: key,
  text: carriersByKey[key].shortName || carriersByKey[key].name,
}))

const Filters = ({ query, onChangeFilter }) => {
  const { shop, carrier, user } = query
  const onChange = key => e => {
    const comboBox = e.target
    const value = comboBox.options[comboBox.selectedIndex].value
    return onChangeFilter({ key, value })
  }
  return (
    <div className="field-body">
      <div className="field">
        <CarrierFilter onChange={onChange('carrier')} carrier={carrier} />
      </div>
      <div className="field">
        <ShopFilter onChange={onChange('shop')} shop={shop} />
      </div>
      <div className="field">
        <UserFilter onChange={onChange('user')} user={user} />
      </div>
    </div>
  )
}

const CarrierFilter = ({ onChange, carrier }) => (
  <div className="control">
    <div className="select is-fullwidth">
      <select onChange={onChange} value={carrier}>
        <option value="*">All carriers</option>
        {carriers.map(c => (
          <option key={c.value} value={c.value}>
            {c.text}
          </option>
        ))}
      </select>
    </div>
  </div>
)

const ShopFilter = ({ onChange, shop }) => (
  <div className="control">
    <div className="select is-fullwidth">
      <select onChange={onChange} value={shop}>
        <option value="*">All shops</option>
        {shops.map(c => (
          <option key={c.value} value={c.value}>
            {c.text}
          </option>
        ))}
      </select>
    </div>
  </div>
)

const UserFilter = ({ onChange, user }) => (
  <div className="control">
    <div className="select is-fullwidth">
      <select onChange={onChange} value={user}>
        <option value="*">All users</option>
        {users.map(c => (
          <option key={c.value} value={c.value}>
            {c.text}
          </option>
        ))}
      </select>
    </div>
  </div>
)

export default Filters
