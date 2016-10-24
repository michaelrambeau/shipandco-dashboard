import React, { PropTypes } from 'react'
import User from 'components/User'

export default ({ user, children }) => (
  <section className="section">
    <User user={user} />
    { children }
  </section>
)
