import React from 'react'
import ShipmentListContainer from './containers/ShipmentListContainer'

const Layout = ({ children }) => <div>{children}</div>

const ShipmentsRoute = (store) => ({
  component: ShipmentListContainer
})

export default (store) => ({
  component : Layout,
  path: 'shipments',
  indexRoute: ShipmentsRoute(store)
  // childRoutes: [
  //   Orders(store)
  // ]
})
