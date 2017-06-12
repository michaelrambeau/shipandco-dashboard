import React from 'react'
import { Link } from 'react-router'

const Buttons = ({ record, model }) => (
  <div className="text-center">
    <Link to={`/users/${record.userId}/${model}`} className="button">
      <span className="icon">
        <i className="fa fa-user" />
      </span>
      <span>Go to the customer</span>
    </Link>
    {record.shopId && (
      <Link
        to={`/shops/${record.shopId}`}
        className="button"
        style={{ marginLeft: '2rem' }}
      >
        <span className="icon">
          <i className="fa fa-shopping-bag" />
        </span>
        <span>Go to the shop</span>
      </Link>
    )}
  </div>
)

export default Buttons
