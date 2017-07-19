import { apiFetchItemList, apiFetchItem, apiFetchDashboad } from './apiFeathers'
import {
  FETCH_ITEM_LIST_REQUEST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_LIST_ERROR,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_ERROR,
  FETCH_DASHBOARD_REQUEST,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_ERROR,
} from './actionTypes'

export function fetchItemListRequest(model, options) {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_ITEM_LIST_REQUEST,
      payload: {
        model,
        options,
      },
    })
    const token = getState().auth.token
    return apiFetchItemList(token, model, options)
      .then(result => {
        dispatch({
          type: FETCH_ITEM_LIST_SUCCESS,
          payload: {
            ...result,
            model,
          },
        })
      })
      .catch(err => {
        console.error('Unable to fetch items', model, err)
      })
  }
}

export function fetchItem(model, id) {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_ITEM_REQUEST,
      payload: {
        model,
        id,
      },
    })
    const token = getState().auth.token
    return apiFetchItem(token, model, id)
      .then(item => {
        dispatch({
          type: FETCH_ITEM_SUCCESS,
          payload: {
            id,
            model,
            item,
          },
        })
      })
      .catch(err => {
        console.error('Unable to fetch item', model, id, err)
        dispatch({
          type: FETCH_ITEM_ERROR,
          payload: {
            id,
            model,
          },
        })
      })
  }
}

export function fetchDashboard() {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_DASHBOARD_REQUEST,
    })
    const token = getState().auth.token
    return apiFetchDashboad(token)
      .then(result => {
        return dispatch({
          type: FETCH_DASHBOARD_SUCCESS,
          payload: result,
        })
      })
      .catch(err => {
        return dispatch({
          type: FETCH_DASHBOARD_ERROR,
          error: true,
          payload: err.message,
        })
      })
  }
}
