import { combineReducers } from 'redux'

import entities from './entities'
import lists from './lists'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    entities,
    lists,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
