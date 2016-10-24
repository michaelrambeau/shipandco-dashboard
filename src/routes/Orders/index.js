import React from 'react'
import { fetchOrder } from 'store/actionCreators'
import Order from './containers/OrderContainer'
import OrderList from './containers/OrderListContainer'

const OrdersLayout = ({ children }) => <div>{children}</div>

const OrderListRoute = (store) => ({
  component: OrderList
})

const OrderRoute = (store) => ({
  path: ':id',
  getComponent: (state, cb) => {
    const id = state.params.id
    store.dispatch(fetchOrder(id))
    cb(null, Order)
  }
})

export default (store) => ({
  component : OrdersLayout,
  path: 'orders',
  indexRoute: OrderListRoute(store),
  childRoutes: [
    OrderRoute(store)
  ]
})
