// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import HomeRoute from './Home'
import CounterRoute from './Counter'
import UsersRoute from './Users'
import OrdersRoute from './Orders'
import ShopsRoute from './Shops'
import ShipmentsRoute from './Shipments'
import LoginRoute from './Login'
import AddressesRoute from './Addresses'

export const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: HomeRoute,
  childRoutes: [
    UsersRoute(store),
    ShopsRoute(store),
    OrdersRoute(store),
    ShipmentsRoute(store),
    CounterRoute(store),
    AddressesRoute(store),
    LoginRoute,
  ],
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
