import React from 'react'
import Order from 'components/Order'

export default ({ order }) => (
  <section className="section">
    <div className="container">
      {order ? (
        <Order order={order} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  </section>
)
