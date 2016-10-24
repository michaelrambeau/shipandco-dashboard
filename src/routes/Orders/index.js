import React from 'react'
import OrderListContainer from './containers/OrderListContainer'

const OrdersLayout = ({ children }) => <div>{children}</div>

const OrdersRoute = (store) => ({
  component: OrderListContainer
})

export default (store) => ({
  component : OrdersLayout,
  path: 'orders',
  indexRoute: OrdersRoute(store)
  // childRoutes: [
  //   Orders(store)
  // ]
})
