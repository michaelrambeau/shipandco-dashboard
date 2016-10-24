import {
  FETCH_SHIPMENT_LIST_SUCCESS
} from './actionTypes'

const initialState = {
  total: 0,
  byDate: []
}

const ACTION_HANDLERS = {
  [FETCH_SHIPMENT_LIST_SUCCESS]: (state, action) => {
    const { total, data } = action.payload
    return {
      ...state,
      total,
      byDate: data
    }
  }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
