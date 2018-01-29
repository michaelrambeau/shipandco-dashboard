import React from 'react'

import KPIPage from './containers/KPIContainer'
import KPIUsersPage from './containers/KPIUsersContainer'
import Auth from 'containers/AuthWrapper'

const Layout = ({ children }) => <div>{children}</div>

export default {
  path: 'kpi',
  component: Auth(Layout),
  indexRoute: { component: KPIPage },
  childRoutes: [
    {
      path: 'customers',
      component: KPIUsersPage,
    },
  ],
}
