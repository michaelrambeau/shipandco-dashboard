import React, { PropTypes } from 'react'
import { browserHistory as history } from 'react-router'
import TimeAgo from 'timeago-react'
import ShopIcon from 'components/utils/ShopIcon'

const Table = ({ shops, count }) => {
  if (!shops || shops.length === 0) return (
    <div>No shop!</div>
  )
  return (
    <div>
      <table className="table clickable is-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Created</th>
            <th>Last sync.</th>
          </tr>
        </thead>
        <tbody>
          {shops.map(shop => (
            <Row shop={shop} key={shop._id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  shops: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired
}
export default Table

const goToShop = shop => () => history.push(`/shops/${shop._id}`)

const Row = ({ shop }) => {
  const date = shop.createdAt || shop.created_at
  return (
    <tr onClick={goToShop(shop)}>
      <td>
        <ShopIcon type={shop.type} />
      </td>
      <td>
        {shop.name}
      </td>
      <td>
        {date ? <TimeAgo datetime={date} /> : <span className="empty">-</span>}
      </td>
      <td>
        {shop.lastSync ? <TimeAgo datetime={shop.lastSync} /> : <span className="empty">-</span>}
      </td>
    </tr>
  )
}

Row.propTypes = {
  shop: PropTypes.object.isRequired
}
