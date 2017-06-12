import React from 'react'
import { browserHistory as history } from 'react-router'
import TimeAgo from 'components/utils/TimeAgo'
import ShopIcon from 'components/utils/ShopIcon'
import CarrierIcon from 'components/utils/CarrierIcon'
import FreeShipments from './FreeShipments'
import './styles.scss'


export default ({ users }) => {
  return (
    <table className={`table is-striped clickable`}>
      <thead>
        <tr>
          <th>email / name</th>
          <th>Carriers</th>
          <th>Shops</th>
          <th>Registration</th>
          <th>Last Login</th>
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

function goToUser (user) {
  return () => history.push(`/users/${user._id}`)
}

const Row = ({ user }) => {
  return (
    <tr onClick={goToUser(user)}>
      <td>
        {user.emails[0].address}
        {!user.emails[0].verified &&
          <span style={{ marginLeft: 5, color: '#ff3860' }}>
            Not verified
          </span>
        }
        <br />
        {user.profile && user.profile.name || <span className="empty">(no name)</span>}
      </td>
      <td>
        {user.carriers ? (
          <CarrierList carriers={user.carriers} />
        ) : (
          <span className="empty">No settings</span>
        )}
      </td>
      <td><ShopList shops={user.shops} /></td>
      <td>
        <TimeAgo datetime={user.createdAt} />
        <br />
        <FreeShipments count={user.freeShipments} />
      </td>
      <td>
        {user.lastLogin ? (
          <TimeAgo datetime={user.lastLogin} />
        ) : (
          <span className="empty">No login</span>
        )}
      </td>
    </tr>
  )
}

function isJapanPostCustomer (japanpostSettings) {
  const numbers = japanpostSettings.customerNumbers
  if (!numbers) return false
  if (!Array.isArray(numbers)) return false
  return numbers.filter(x => !!x).length > 0
}

const CarrierList = ({ carriers }) => {
  const keys = Object.keys(carriers)
  if (keys.length === 0) return <span className="empty">No carrier</span>
  return (
    <div className="text-center1">
      {keys
        .filter(key => !!carriers[key])
        .filter(key => {
          return key !== 'japanpost' || isJapanPostCustomer(carriers[key])
        })
        .map(key => <CarrierIcon carrier={key} size={40} key={key} />)
      }
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

// function userLastShipment(user) {
//   if (!user.shipments) return false;
//   const lastShipment = user.shipments
//     .slice(0, 0)
//    return lastShipment
// }
