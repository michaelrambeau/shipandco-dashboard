import {
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_ERROR
} from './actionTypes'

const initialState = {
  loading: false,
  users: {},
  orders: {},
  shipments: {},
  shops: {}
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
  [FETCH_ITEM_LIST_SUCCESS]: (state, action) => {
    const { model, data } = action.payload
    const items = addEntities(state[model], data)
    return {
      ...state,
      [model]: items
    }
  },
  [FETCH_ITEM_SUCCESS]: (state, action) => {
    const { item, id, model } = action.payload
    const items = {
      ...state[model],
      [id]: item
    }
    return {
      ...state,
      [model]: items
    }
  },
  [FETCH_ITEM_ERROR]: (state, action) => {
    const { id, model } = action.payload
    const items = {
      ...state[model],
      [id]: 'ERROR'
    }
    return {
      ...state,
      [model]: items
    }
  }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
