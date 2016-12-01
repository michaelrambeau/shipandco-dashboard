import React from 'react'
import { Link } from 'react-router'
import TimeAgo from 'timeago-react'
import ShopIcon from 'components/utils/ShopIcon'
import CarrierIcon from 'components/utils/CarrierIcon'

export default ({ users }) => {
  return (
    <table className="table is-striped">
      <thead>
        <tr>
          <th>email / name</th>
          <th>Carriers</th>
          <th>Shops</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <Row user={user} key={user._id} />
        ))}
      </tbody>
    </table>
  )
}

const Row = ({ user }) => {
  return (
    <tr>
      <td>
        <Link to={`/users/${user._id}`}>
          {user.emails[0].address}
          <br />
          {user.profile && user.profile.name || <span className="empty">(no name)</span>}
        </Link>
      </td>
      <td>
        {user.carriers ? (
          <CarrierList carriers={user.carriers} />
        ) : (
          <span className="empty">No settings</span>
        )}
      </td>
      <td><ShopList shops={user.shops} /></td>
      <td><TimeAgo datetime={user.createdAt} /></td>
    </tr>
  )
}

const CarrierList = ({ carriers }) => {
  const keys = Object.keys(carriers)
  if (keys.length === 0) return <span className="empty">No carrier</span>
  return (
    <div>
      {keys.map(key => {
        return (
          <div key={key}>
            <CarrierIcon carrier={key} size={20} />
            {' '}
            {key}
          </div>)
      })}
    </div>
  )
}
const ShopList = ({ shops }) => {
  if (shops.length === 0) return <span className="empty">No shop</span>
  return (
    <div>
      {shops.map(shop => {
        return (
          <div key={shop._id}>
            <ShopIcon type={shop.type} size={24} />
            {' '}
            {shop.name}
          </div>
        )
      })}
    </div>
  )
}
