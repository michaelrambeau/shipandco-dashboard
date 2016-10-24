import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TimeAgo from 'timeago-react'

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
  return (
    <tr>
      <td>{shop.type}</td>
      <td>
        <Link to={`/shops/${shop._id}`}>
          {shop.name}
        </Link>
      </td>
      <td><TimeAgo date={shop.created_at} /></td>
      <td>
        {shop.lastSync ? <TimeAgo date={shop.lastSync} /> : <span className="empty">-</span>}
      </td>
    </tr>
) }

Row.propTypes = {
  shipment: PropTypes.object.isRequired
}
