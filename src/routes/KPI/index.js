import React from 'react'
import KPIPage from './containers/KPIContainer'

const Layout = ({ children }) =>
  <div>
    {children}
  </div>

export default {
  path: 'kpi',
  component: Layout,
  indexRoute: { component: KPIPage }
}
