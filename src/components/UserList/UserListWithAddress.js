import React from 'react'

import AddressRomaji from 'components/AddressFromCompact'
import AddressKanji from 'components/AddressFromCompact/AddressKanji'
import LastLogin from './columns/LastLogin'
import ShipmentCount from './columns/ShipmentCount'
import goToUser from './goToUser'

const defaultOptions = { showHeader: true }

const UserListWithAddress = ({ users, options = defaultOptions }) => {
  const activeDate = +new Date() - 3600 * 24 * 7 * 1000 // today - 1 week
  return (
    <table className={`table is-striped clickable`}>
      {options.showHeader &&
        <thead>
          <tr>
            <th>Company</th>
            <th>Address in Romaji</th>
            <th>Address in Kanji</th>
            <th style={{ minWidth: '160px' }}>Activity</th>
          </tr>
        </thead>}
      <tbody>
        {users.map(user =>
          <Row
            user={user}
            key={user._id}
            options={options}
            activeDate={activeDate}
          />
        )}
      </tbody>
    </table>
  )
}

const Row = ({ user, activeDate }) => {
  const warehouse = user.settings.defaultWarehouse || { address: {} }
  const contactInfo = [
    warehouse.address.company,
    warehouse.address.name,
    warehouse.address.company_kanji,
    warehouse.address.email || user.emails[0].address,
    warehouse.address.phone,
  ].filter(item => !!item && item.trim())
  return (
    <tr onClick={goToUser(user)}>
      <td>
        {contactInfo.map((info, i) =>
          <div key={i} className={i === 0 ? 'company-name' : null}>
            {info}
          </div>
        )}
      </td>
      <td>
        <AddressRomaji address={warehouse.address} />
      </td>
      <td>
        <AddressKanji address={warehouse.address} />
      </td>
      <td>
        {new Date(user.lastShipment) > activeDate &&
          <div className="tag is-success">Active customer</div>}
        {user.shipmentCount > 0
          ? <ShipmentCount user={user} />
          : <div>
              <LastLogin user={user} />
            </div>}
      </td>
    </tr>
  )
}

export default UserListWithAddress
