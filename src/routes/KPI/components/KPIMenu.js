import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

const KPIMenu = ({ activeTab }) =>
  <div className="tabs is-boxed">
    <ul>
      <li className={classNames({ 'is-active': activeTab === 'shipments' })}>
        <Link to="/kpi">Shipments</Link>
      </li>
      <li className={classNames({ 'is-active': activeTab === 'customers' })}>
        <Link to="/kpi/customers">Customers</Link>
      </li>
    </ul>
  </div>

export default KPIMenu
