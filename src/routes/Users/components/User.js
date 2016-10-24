import React, { PropTypes } from 'react'
import User from 'components/User'
import OrderList from 'components/OrderList'

export default ({ user, children }) => (
  <section className="section">
    <User user={user} />
    { children }
  </section>
)
