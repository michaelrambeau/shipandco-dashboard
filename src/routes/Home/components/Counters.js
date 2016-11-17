import React from 'react'

export default ({ counters }) => {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <p className="heading">All customers</p>
        <p className="title">{counters.users}</p>
      </div>
      <div className="level-item has-text-centered">
        <p className="heading">All shops</p>
        <p className="title">{counters.shops}</p>
      </div>
      <div className="level-item has-text-centered">
        <p className="heading">All Orders</p>
        <p className="title">{counters.orders}</p>
      </div>
      <div className="level-item has-text-centered">
        <p className="heading">All shipments</p>
        <p className="title">{counters.shipments}</p>
      </div>
    </nav>
  )
}
