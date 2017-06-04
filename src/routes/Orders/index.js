import Auth from 'containers/AuthWrapper'
import Layout from './components/Layout'
import ListView from './components/ListView'
import ItemView from './components/ItemView'

import createListViewContainer from 'containers/createListViewContainer'
import createItemViewContainer from 'containers/createItemViewContainer'

const model = 'orders'
const options = {
  $limit: 50
}

const ListRoute = {
  component: Auth(createListViewContainer(
    model,
    ListView,
    options
  ))
}

const ItemRoute = {
  path: ':id',
  component: Auth(createItemViewContainer(model, ItemView))
}

export default (store) => ({
  component : Layout,
  path: 'orders',
  indexRoute: ListRoute,
  childRoutes: [
    ItemRoute
  ]
})
