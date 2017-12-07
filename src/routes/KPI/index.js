import React from 'react'

import KPIPage from './containers/KPIContainer'
import Auth from 'containers/AuthWrapper'

const Layout = ({ children }) => <div>{children}</div>

export default {
  path: 'kpi',
  component: Auth(Layout),
  indexRoute: { component: KPIPage },
}
