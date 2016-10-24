// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'
import UsersRoute from './Users'
import OrdersRoute from './Orders'
import ShipmentsRoute from './Shipments'
import About from './About'
import About1 from './About/About1'
import About2 from './About/About2'
import React from 'react'

const AboutRoute = {
  path: 'about',
  component: ({ children }) => <About value="my-value">{children}</About>,
  // component: About,
  indexRoute: {
    component: About1
  },
  childRoutes: [
    {
      path: '1',
      component: About1
    },
    {
      path: '2',
      component: About2
    }
  ]
}

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    UsersRoute(store),
    OrdersRoute(store),
    ShipmentsRoute(store),
    CounterRoute(store),
    AboutRoute
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
