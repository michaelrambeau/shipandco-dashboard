import React from 'react'
import OrderList from 'components/OrderList'

export default ({ orders }) => (
  <section className="section">
    <div className="container">
      <h2 className="title is-4">All orders ({orders.length})</h2>
      <OrderList orders={orders} count={orders.length} />
    </div>
  </section>
)
