import Layout from './components/Layout'
import ListView from './components/ListView'
import ItemView from './components/ItemView'

// import { getListViewComponent, getItemViewComponent } from 'routes/helpers'
import createUserContainer from './createUserContainer'
import createListViewContainer from 'containers/createListViewContainer'
import createItemViewContainer from 'containers/createItemViewContainer'

import UserOrders from 'components/User/Orders'
import UserProfile from 'components/User/Profile'
import UserCarriers from 'components/User/Carriers'
import UserShipments from 'components/User/Shipments'
import UserWarehouses from 'components/User/Warehouses'
import UserShops from 'components/User/Shops'
import UserBilling from 'components/User/Billing'
import ShipmentListView from './components/ShipmentListView'
import OrderListView from './components/OrderListView'
import withInvoices from './withInvoices'

import Auth from 'containers/AuthWrapper'

const model = 'users'
const options = {
  $sort: '-createdAt',
  $limit: 1000,
}

const ListRoute = {
  component: Auth(createListViewContainer(model, ListView, options)),
}

const ItemRoute = store => ({
  path: ':id',
  component: Auth(createItemViewContainer(model, ItemView)),
  indexRoute: {
    component: createUserContainer(UserShops),
  },
  childRoutes: [
    {
      path: 'profile',
      component: createUserContainer(UserProfile),
    },
    {
      path: 'orders',
      component: Auth(
        createListViewContainer('orders', createUserContainer(OrderListView), {
          $limit: 20,
          $sort: '-date',
        })
      ),
    },
    {
      path: 'carriers',
      component: createUserContainer(UserCarriers),
    },
    {
      path: 'warehouses',
      component: createUserContainer(UserWarehouses),
    },
    {
      path: 'billing',
      component: createUserContainer(withInvoices(UserBilling)),
    },
    {
      path: 'shipments',
      component: Auth(
        createListViewContainer(
          'shipments',
          createUserContainer(ShipmentListView),
          { $limit: 20, $sort: '-date' }
        )
      ),
    },
    {
      path: 'shops',
      component: createUserContainer(UserShops),
    },
  ],
})

export default store => ({
  component: Layout,
  path: 'users',
  indexRoute: ListRoute,
  childRoutes: [ItemRoute(store)],
})
