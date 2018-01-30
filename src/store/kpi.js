import { FETCH_KPI_SUCCESS, FETCH_KPI_REQUEST } from './actionTypes'

const initialState = {
  loading: true,
  results: null
}

const ACTION_HANDLERS = {
  [FETCH_KPI_REQUEST]: (state, action) => {
    return {
      ...state,
      results: null,
      loading: true
    }
  },
  [FETCH_KPI_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload,
      loading: false
    }
  }
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
