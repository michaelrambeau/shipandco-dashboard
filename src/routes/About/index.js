import React from 'react'
import { Link } from 'react-router'

export default ({ value, children }) => (
  <section className="section">
    <h1>About</h1>
    value={value}
    <Link to="/about/1">Page 1</Link>
    <br />
    <Link to="/about/2">Page 2</Link>
    <p>Children</p>
    {children}
  </section>
)
