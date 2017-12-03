import { FETCH_KPI_SUCCESS } from './actionTypes'

const initialState = { results: [] }

const ACTION_HANDLERS = {
  [FETCH_KPI_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  }
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
