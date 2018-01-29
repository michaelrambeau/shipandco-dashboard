import React from 'react'
import { Link } from 'react-router'

const KPIMenu = () => (
  <div className="tabs">
    <ul>
      <li>
        <Link to="/kpi">Shipments</Link>
      </li>
      <li>
        <Link to="/kpi/customers">Customers</Link>
      </li>
    </ul>
  </div>
)

export default KPIMenu
