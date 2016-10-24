import React from 'react'
import { Link } from 'react-router'

const items = [
  {
    name: 'shops',
    text: 'Shops',
    icon: 'shopping-bag'
  },
  {
    name: 'orders',
    text: 'Orders',
    icon: 'file'
  },
  {
    name: 'shipments',
    text: 'Shipments',
    icon: 'cubes'
  },
  {
    name: 'carriers',
    text: 'Carriers',
    icon: 'truck'
  },
  {
    name: 'profile',
    text: 'Profile',
    icon: 'user'
  }
]

export default ({ userId, activeTab = 'profile' }) => (
  <div className="tabs">
    <ul>
      {items.map(item => (
        <li
          key={item.name}
          className={activeTab === item.name ? 'is-active' : ''}
        >
          <Link to={`/users/${userId}/${item.name}`}>
            <i className={`fa fa-${item.icon}`} style={{ marginRight: '0.5rem' }} />
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
