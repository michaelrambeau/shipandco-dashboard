import React from 'react'
import Users from './containers/UsersContainer'
import User from './containers/UserContainer'
import createUserContainer from './containers/createUserContainer'
import { fetchUser } from 'store/actionCreators'

import UserOrders from 'components/User/Orders'
import UserProfile from 'components/User/Profile'
import UserCarriers from 'components/User/Carriers'
import UserShipments from 'components/User/Shipments'
import UserShops from 'components/User/Shops'

const UsersLayout = ({ children }) => (
  <div>
    {children}
  </div>
)

const UsersRoute = (store) => ({
  component: Users
})

const UserRoute = (store) => ({
  // component: User,
  path: ':id',
  getComponent: (state, cb) => {
    // console.log(nextState);
    const id = state.params.id
    store.dispatch(fetchUser(id))
    cb(null, User)
  },
  indexRoute: {
    component: createUserContainer(UserShops)
  },
  childRoutes: [
    {
      path: 'profile',
      component: createUserContainer(UserProfile)
    },
    {
      path: 'orders',
      component: createUserContainer(UserOrders)
    },
    {
      path: 'carriers',
      component: createUserContainer(UserCarriers)
    },
    {
      path: 'shipments',
      component: createUserContainer(UserShipments)
    },
    {
      path: 'shops',
      component: createUserContainer(UserShops)
    }
  ]
})

// Sync route definition
export default (store) => ({
  component : UsersLayout,
  path: 'users',
  indexRoute: UsersRoute(store),
  childRoutes: [
    UserRoute(store)
  ]
})
