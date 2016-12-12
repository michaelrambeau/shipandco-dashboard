import Auth from 'containers/AuthWrapper'
import Layout from './components/Layout'
import ListView from './components/ListView'
import ItemView from './components/ItemView'

import { getListViewComponent, getItemViewComponent } from 'routes/helpers'
import createUserContainer from './createUserContainer'

import UserOrders from 'components/User/Orders'
import UserProfile from 'components/User/Profile'
import UserCarriers from 'components/User/Carriers'
import UserShipments from 'components/User/Shipments'
import UserShops from 'components/User/Shops'

const model = 'users'
const options = {
  $sort: 'profile.name',
  $limit: 200
}

const ListRoute = (store) => ({
  getComponent: getListViewComponent(model, ListView, options)(store)
})

const ItemRoute = (store) => ({
  path: ':id',
  getComponent: getItemViewComponent(model, ItemView)(store),
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

export default (store) => ({
  component : Auth(Layout),
  path: 'users',
  indexRoute: ListRoute(store),
  childRoutes: [
    ItemRoute(store)
  ]
})
