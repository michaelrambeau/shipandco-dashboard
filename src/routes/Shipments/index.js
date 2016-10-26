import React from 'react'
import ShipmentListContainer from './containers/ShipmentListContainer'
import ShipmentContainer from './containers/ShipmentContainer'
import { fetchItem } from 'store/actionCreators'

const Layout = ({ children }) => <div>{children}</div>

const ShipmentListRoute = (store) => ({
  component: ShipmentListContainer
})

const ShipmentRoute = (store) => ({
  path: ':id',
  getComponent: (state, cb) => {
    const id = state.params.id
    store.dispatch(fetchItem('shipments', id))
    cb(null, ShipmentContainer)
  }
})

export default (store) => ({
  component : Layout,
  path: 'shipments',
  indexRoute: ShipmentListRoute(store),
  childRoutes: [
    ShipmentRoute(store)
  ]
})
