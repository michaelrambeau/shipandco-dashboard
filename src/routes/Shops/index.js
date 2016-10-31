import Layout from './components/Layout'
import ListView from './components/ListView'
import ItemView from './components/ItemView'

import { getListViewComponent, getItemViewComponent } from 'routes/helpers'

const model = 'shops'

const ListRoute = (store) => ({
  getComponent: getListViewComponent(model, ListView)(store)
})

const ItemRoute = (store) => ({
  path: ':id',
  getComponent: getItemViewComponent(model, ItemView)(store)
})

export default (store) => ({
  component : Layout,
  path: 'shops',
  indexRoute: ListRoute(store),
  childRoutes: [
    ItemRoute(store)
  ]
})
