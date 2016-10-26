import {
  FETCH_ITEM_LIST_SUCCESS
} from './actionTypes'

const defaultData = {
  total: 0,
  items: []
}
const initialState = {
  users: defaultData,
  orders: defaultData,
  shipments: defaultData
}

const ACTION_HANDLERS = {
  [FETCH_ITEM_LIST_SUCCESS]: (state, action) => {
    const { total, data, model } = action.payload
    return {
      ...state,
      [model]: {
        total,
        items: data
      }
    }
  }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
