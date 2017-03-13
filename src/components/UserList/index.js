import React from 'react'
import { browserHistory as history } from 'react-router'
import TimeAgo from 'timeago-react'
import ShopIcon from 'components/utils/ShopIcon'
import CarrierIcon from 'components/utils/CarrierIcon'
import './styles.scss'


export default ({ users }) => {
  return (
    <table className={`table is-striped UserList`}>
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

const Row = ({ user }) => {
  return (
    <tr onClick={() => history.push(`/users/${user._id}`)}>
      <td> 
        {user.emails[0].address}
        {!user.emails[0].verified && <span style={{ marginLeft: 5, color: '#ff3860' }}>
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
      <td><TimeAgo datetime={user.createdAt} /></td>
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

const CarrierList = ({ carriers }) => {
  const keys = Object.keys(carriers)
  if (keys.length === 0) return <span className="empty">No carrier</span>
  return (
    <div>
      {keys
        .filter(key => !!carriers[key])
        .filter(key => {
          if (key === 'japanpost') {
            const numbers = carriers[key].customerNumbers
            return !!numbers && Array.isArray(numbers)
          }
          return true
        })
        .map(key => {
          return (
            <div key={key}>
              <CarrierIcon carrier={key} size={20} />
              {' '}
              {key}
            </div>)
        })
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
