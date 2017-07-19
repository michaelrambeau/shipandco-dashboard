import { FETCH_DASHBOARD_SUCCESS } from './actionTypes'

const initialState = {
  counters: {
    users: 0,
    shops: 0,
    orders: 0,
    shipments: 0,
  },
  topUsers: [],
}

const ACTION_HANDLERS = {
  [FETCH_DASHBOARD_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    }
  },
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
