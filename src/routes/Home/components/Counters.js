import React from 'react'
import numeral from 'numeral'

function formatCounter(count) {
  return numeral(count).format('0a')
}

export default ({ counters }) => {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">All customers</p>
          <p className="title">
            {formatCounter(counters.users)}
          </p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">All shops</p>
          <p className="title">
            {formatCounter(counters.shops)}
          </p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">All Orders</p>
          <p className="title">
            {formatCounter(counters.orders)}
          </p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">All shipments</p>
          <p className="title">
            {formatCounter(counters.shipments)}
          </p>
        </div>
      </div>
    </nav>
  )
}
