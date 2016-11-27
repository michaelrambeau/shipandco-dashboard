import Auth from 'containers/AuthWrapper'
import Layout from './components/Layout'
import ListView from './components/ListView'
import ItemView from './components/ItemView'

import { getListViewComponent, getItemViewComponent } from 'routes/helpers'

const model = 'shops'
const options = {
  $sort: '-createdAt'
}

const ListRoute = (store) => ({
  getComponent: getListViewComponent(model, ListView, options)(store)
})

const ItemRoute = (store) => ({
  path: ':id',
  getComponent: getItemViewComponent(model, ItemView)(store)
})

export default (store) => ({
  component : Auth(Layout),
  path: 'shops',
  indexRoute: ListRoute(store),
  childRoutes: [
    ItemRoute(store)
  ]
})
