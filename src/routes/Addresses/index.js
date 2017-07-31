import React from 'react'
import ListView from './components/ListView'
import createListViewContainer from 'containers/createListViewContainer'
import Auth from 'containers/AuthWrapper'

const model = 'addresses'
const options = {
  $sort: '-createdAt',
  $limit: 1000,
}

const ListRoute = {
  component: Auth(createListViewContainer(model, ListView, options)),
}

const Layout = ({ children }) =>
  <div>
    {children}
  </div>

export default store => ({
  component: Layout,
  path: 'addresses',
  indexRoute: ListRoute,
})
