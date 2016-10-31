import {
  FETCH_DASHBOARD_SUCCESS
} from './actionTypes'

const initialState = {
  counters: {
    users: 0,
    shops: 0,
    orders: 0,
    shipments: 0
  }
}

const ACTION_HANDLERS = {
  [FETCH_DASHBOARD_SUCCESS]: (state, action) => {
    const { counters } = action.payload
    return {
      ...state,
      counters
    }
  }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
