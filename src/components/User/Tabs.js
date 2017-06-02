import React from 'react'
import { Link } from 'react-router'

const Counter = ({ count }) => {
  const value = count === undefined ? 'Loading...' : count
  if (count === 0) return null
  return (
    <span className="tag is-grey">{value}</span>
  )    
}

const items = [
  {
    name: 'shops',
    text: ({ user }) => (
      <span>
        Shops <Counter count={user.shops.length} />
      </span>
    ),
    icon: 'shopping-bag'
  },
  {
    name: 'orders',
    text: ({user}) => (
      <span>
        Orders <Counter count={user.orderCount} />
      </span>
    ),
    icon: 'file'
  },
  {
    name: 'shipments',
    text: ({ user }) => (
      <span>
        Shipments <Counter count={user.shipmentCount} />
      </span>
    ),
    icon: 'cubes'
  },
  {
    name: 'carriers',
    text: ({ user }) => {
      const carrierCount = Object.values(user.carriers)
        .filter(item => !!item).length
      return (
        <span>
          Carriers <Counter count={carrierCount} />
        </span>
        )
    },
    icon: 'truck'
  },
  {
    name: 'profile',
    text: ({ user }) => <span>Profile</span>,
    icon: 'user'
  }
]

export default ({ userId, activeTab = 'profile', user }) => (
  <div className="tabs">
    <ul>
      {items.map(item => {
        const Text = item.text
        return (
          <li
            key={item.name}
            className={activeTab === item.name ? 'is-active' : ''}
          >
            <Link to={`/users/${userId}/${item.name}`}>
              <i className={`fa fa-${item.icon}`} style={{ marginRight: '0.5rem' }} />
              <Text user={user} />
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)
