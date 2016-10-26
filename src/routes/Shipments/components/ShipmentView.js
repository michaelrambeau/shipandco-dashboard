import React from 'react'
import Shipment from 'components/Shipment'

export default ({ shipment }) => (
  <section className="section">
    <div className="container">
      {shipment ? (
        <Shipment shipment={shipment} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  </section>
)
