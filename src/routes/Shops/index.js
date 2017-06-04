import Auth from 'containers/AuthWrapper'
import Layout from './components/Layout'
import ListView from './components/ListView'
import ItemView from './components/ItemView'

// import { getListViewComponent, getItemViewComponent } from 'routes/helpers'
import createListViewContainer from 'containers/createListViewContainer'
import createItemViewContainer from 'containers/createItemViewContainer'

const model = 'shops'
const options = {
  $sort: '-createdAt',
  $limit: 100
}

const ListRoute = {
  component: Auth(createListViewContainer(
    model,
    ListView,
    options
  ))
}

const ItemRoute = (store) => ({
  path: ':id',
  component: Auth(createItemViewContainer(model, ItemView))
})

export default (store) => ({
  component : Layout,
  path: 'shops',
  indexRoute: ListRoute,
  childRoutes: [
    ItemRoute(store)
  ]
})
