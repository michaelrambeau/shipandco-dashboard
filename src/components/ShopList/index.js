import React, { PropTypes } from 'react'
import { browserHistory as history } from 'react-router'
import TimeAgo from 'components/utils/TimeAgo'
import ShopIcon from 'components/utils/ShopIcon'
import get from 'lodash.get'

const Table = ({ shops, count }) => {
  if (!shops || shops.length === 0) return <div>No shop!</div>
  return (
    <div>
      <table className="table clickable is-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Settings</th>
            <th>Created</th>
            <th>Last sync.</th>
          </tr>
        </thead>
        <tbody>{shops.map(shop => <Row shop={shop} key={shop._id} />)}</tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  shops: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
}
export default Table

const goToShop = shop => () => history.push(`/shops/${shop._id}`)

const Autofulfill = ({ shop }) => {
  const enabled = get(shop, 'settings.autofulfill')
  if (!enabled) return null
  return (
    <span>
      <span className="fa fa-check-circle" />
      {' Auto-fulfill'}
    </span>
  )
}

const ShopState = ({ shop }) => {
  const { state } = shop
  if (!state) return null
  const mapping = {
    pending: 'is-warning',
  }
  const className = mapping[state] || 'is-success'
  return (
    <div>
      <span className={`tag ${className}`}>{state}</span>
    </div>
  )
}

const Row = ({ shop }) => {
  const date = shop.createdAt || shop.created_at

  return (
    <tr onClick={goToShop(shop)}>
      <td>
        <ShopIcon type={shop.type} />
      </td>
      <td>{shop.name}</td>
      <td>
        <Autofulfill shop={shop} />
        <ShopState shop={shop} />
      </td>
      <td>
        {date ? <TimeAgo datetime={date} /> : <span className="empty">-</span>}
      </td>
      <td>
        {shop.lastSync ? (
          <TimeAgo datetime={shop.lastSync} />
        ) : (
          <span className="empty">-</span>
        )}
        {shop.tokenExpiration && (
          <div style={{ color: '#999' }}>
            Token expiration date: <TimeAgo datetime={shop.tokenExpiration} />
          </div>
        )}
      </td>
    </tr>
  )
}

Row.propTypes = {
  shop: PropTypes.object.isRequired,
}
