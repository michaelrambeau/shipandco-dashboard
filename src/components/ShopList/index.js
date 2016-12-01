import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TimeAgo from 'timeago-react'
import ShopIcon from 'components/utils/ShopIcon'

const Table = ({ shops, count }) => {
  if (!shops || shops.length === 0) return (
    <div>No shop!</div>
  )
  return (
    <div>
      {false && <h4 className="title is-5">Shops ({count})</h4>}
      <table className="table">
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

const Row = ({ shop }) => {
  const date = shop.data && shop.data.created_at || shop.createdAt || shop.created_at
  return (
    <tr>
      <td>
        <ShopIcon type={shop.type} />
      </td>
      <td>
        <Link to={`/shops/${shop._id}`}>
          {shop.name}
        </Link>
      </td>
      <td>
        {date ? <TimeAgo datetime={date} /> : <span className="empty">-</span>}
      </td>
      <td>
        {shop.lastSync ? <TimeAgo datetime={shop.lastSync} /> : <span className="empty">-</span>}
      </td>
    </tr>
) }

Row.propTypes = {
  shop: PropTypes.object.isRequired
}
