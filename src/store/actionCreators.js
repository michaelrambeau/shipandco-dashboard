import {
  apiFetchItemList,
  apiFetchItem,
  apiFetchDashboad
} from './apiFeathers'
import {
  FETCH_ITEM_LIST_REQUEST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_DASHBOARD_REQUEST,
  FETCH_DASHBOARD_SUCCESS
} from './actionTypes'

export function fetchItemListRequest (model, options) {
  return (dispatch) => {
    dispatch({
      type: FETCH_ITEM_LIST_REQUEST,
      payload: {
        model
      }
    })
    return apiFetchItemList(model, options)
      .then(result => {
        dispatch({
          type: FETCH_ITEM_LIST_SUCCESS,
          payload: {
            ...result,
            model
          }
        })
      })
      .catch(err => console.error('Unable to fetch items', model, err))
  }
}

export function fetchItem (model, id) {
  return (dispatch) => {
    dispatch({
      type: FETCH_ITEM_REQUEST,
      payload: {
        model,
        id
      }
    })
    return apiFetchItem(model, id)
      .then(item => {
        dispatch({
          type: FETCH_ITEM_SUCCESS,
          payload: {
            id,
            model,
            item
          }
        })
      })
      .catch(err => console.error('Unable to fetch item', model, id, err))
  }
}

export function fetchDashboard () {
  return (dispatch) => {
    dispatch({
      type: FETCH_DASHBOARD_REQUEST
    })
    return apiFetchDashboad()
      .then(result => {
        dispatch({
          type: FETCH_DASHBOARD_SUCCESS,
          payload: {
            counters: result.counters
          }
        })
      })
      .catch(err => console.error('Unable to fetch dashboard', err))
  }
}
