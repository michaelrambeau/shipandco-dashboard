import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import reduxifyAuthentication from 'feathers-reduxify-authentication'

import makeRootReducer from './reducers'

export default (initialState = {}, feathersApp) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, reduxPromiseMiddleware()]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const feathersAuthentication = reduxifyAuthentication(feathersApp, {
    authSelector: (state) => state.auth.user
  })

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(null, feathersAuthentication),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  store.dispatch(feathersAuthentication.authenticate())
    .then(result => console.log('Authentication OK', result))
    .catch(err => {
      console.log('authenticate catch', err) // eslint-disable-line no-console
      return err
    })

  return store
}
