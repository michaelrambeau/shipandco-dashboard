import React from 'react'
import ShipmentList from 'components/ShipmentList'

export default ({ shipments, total }) => (
  <section className="section">
    <div className="container">
      <h2 className="title is-4">All shipments ({total})</h2>
      <ShipmentList shipments={shipments} count={total} />
    </div>
  </section>
)
