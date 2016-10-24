import { combineReducers } from 'redux'

import entities from './entities'
import shipments from './shipments'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    entities,
    shipments,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
