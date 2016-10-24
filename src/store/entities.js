import {
  FETCH_USER_LIST_SUCCESS,
  FETCH_ORDER_LIST_SUCCESS,
  FETCH_SHIPMENT_LIST_SUCCESS,
  FETCH_USER_SUCCESS
} from './actionTypes'

const initialState = {
  users: {},
  orders: {},
  shipments: {}
}

function addEntities (before, added) {
  return added.reduce((result, entity) => {
    return {
      ...result,
      [entity._id]: entity
    }
  }, before)
}

const ACTION_HANDLERS = {
  [FETCH_USER_LIST_SUCCESS]: (state, action) => {
    const users = addEntities(state.users, action.payload.users)
    return {
      ...state,
      users
    }
  },
  [FETCH_ORDER_LIST_SUCCESS]: (state, action) => {
    const orders = addEntities(state.orders, action.payload.orders)
    return {
      ...state,
      orders
    }
  },
  [FETCH_SHIPMENT_LIST_SUCCESS]: (state, action) => {
    const shipments = addEntities(state.shipments, action.payload.data)
    return {
      ...state,
      shipments
    }
  },
  [FETCH_USER_SUCCESS]: (state, action) => {
    const { user, id } = action.payload
    const users = {
      ...state.users,
      [id]: user
    }
    return {
      ...state,
      users
    }
  }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
