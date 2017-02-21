import React from 'react'
import { Link } from 'react-router'

const items = [
  {
    name: 'shops',
    text: ({ user }) => <span>Shops ({user.shops.length})</span>,
    icon: 'shopping-bag'
  },
  {
    name: 'orders',
    text: ({user}) => <span>Orders ({user.orderCount})</span>,
    icon: 'file'
  },
  {
    name: 'shipments',
    text: ({ user }) => <span>Shipments ({user.shipmentCount})</span>,
    icon: 'cubes'
  },
  {
    name: 'carriers',
    text: ({ user }) => <span>Carriers</span>,
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
