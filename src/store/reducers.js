import { combineReducers } from 'redux'

import entities from './entities'
import lists from './lists'
import dashboard from './dashboard'
import kpi from './kpi'
import ui from './ui'

export const makeRootReducer = (asyncReducers, feathersAuthentication) => {
  return combineReducers({
    entities,
    lists,
    dashboard,
    kpi,
    auth: feathersAuthentication.reducer,
    ui,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
