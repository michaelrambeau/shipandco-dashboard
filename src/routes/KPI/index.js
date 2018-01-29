import React from 'react'

import KPIShipmentsPage from './containers/KPIShipmentsContainer'
import KPIUsersPage from './containers/KPIUsersContainer'
import Auth from 'containers/AuthWrapper'

const Layout = ({ children }) =>
  <div>
    {children}
  </div>

export default {
  path: 'kpi',
  component: Auth(Layout),
  indexRoute: { component: KPIShipmentsPage },
  childRoutes: [
    {
      path: 'customers',
      component: KPIUsersPage
    }
  ]
}
