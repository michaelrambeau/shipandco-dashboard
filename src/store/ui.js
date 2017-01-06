import {
  FETCH_ITEM_LIST_REQUEST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_DASHBOARD_REQUEST,
  FETCH_DASHBOARD_SUCCESS
} from './actionTypes'

const initialState = {
  loading: false
}

const ACTION_HANDLERS = {
  [FETCH_ITEM_LIST_REQUEST]: (state) => {
    return {
      ...state,
      loading: true
    }
  },
  [FETCH_DASHBOARD_REQUEST]: (state) => {
    return {
      ...state,
      loading: true
    }
  },
  [FETCH_DASHBOARD_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false
    }
  },
  [FETCH_ITEM_LIST_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false
    }
  }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
