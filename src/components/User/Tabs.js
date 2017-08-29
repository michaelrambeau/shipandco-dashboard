import React from 'react'
import { Link } from 'react-router'
import get from 'lodash.get'

const Counter = ({ count }) => {
  const value = count === undefined ? 'Loading...' : count
  if (count === 0) return null
  return (
    <span className="light-text">
      {value}
    </span>
  )
}

const items = [
  {
    name: 'shops',
    text: ({ user }) =>
      <span>
        Shops <Counter count={user.shops.length} />
      </span>,
    icon: 'shopping-bag',
  },
  {
    name: 'orders',
    text: ({ user }) =>
      <span>
        Orders <Counter count={user.orderCount} />
      </span>,
    icon: 'file',
  },
  {
    name: 'shipments',
    text: ({ user }) =>
      <span>
        Shipments <Counter count={user.shipmentCount} />
      </span>,
    icon: 'cubes',
  },
  {
    name: 'carriers',
    text: ({ user }) => {
      const carrierCount = Object.values(user.carriers).filter(item => !!item)
        .length
      return (
        <span>
          Carriers <Counter count={carrierCount} />
        </span>
      )
    },
    icon: 'truck',
  },
  {
    name: 'warehouses',
    text: ({ user }) => {
      const warehouses = get(user, 'warehouses') || []
      return (
        <span>
          Warehouses　<Counter count={warehouses.length} />
        </span>
      )
    },
    icon: 'building',
  },
  {
    name: 'profile',
    text: ({ user }) => <span>Profile</span>,
    icon: 'user',
  },
  {
    name: 'billing',
    text: ({ user }) => <span>Billing</span>,
    icon: 'money',
  },
]

export default ({ userId, activeTab = 'profile', user }) =>
  <div className="tabs is-boxed">
    <ul>
      {items.map(item => {
        const Text = item.text
        return (
          <li
            key={item.name}
            className={activeTab === item.name ? 'is-active' : ''}
          >
            <Link to={`/users/${userId}/${item.name}`}>
              <span className="icon is-small">
                <i className={`fa fa-${item.icon}`} />
              </span>
              <Text user={user} />
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
