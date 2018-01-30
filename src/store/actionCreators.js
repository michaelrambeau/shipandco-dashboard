import { apiFetchItemList, apiFetchItem, apiFetchData } from './apiFeathers'
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

// Abstract action creator HOF used by `fetchDashboard` and `fetchKPI`
const fetchData = ({ key, type }) => ({ query } = { query: {} }) => {
  return (dispatch, getState) => {
    dispatch({
      type: `FETCH_${key}_REQUEST`,
      payload: query,
    })
    const token = getState().auth.token
    console.log('>> Fetch', query)

    return apiFetchData({ token, key, query, type })
      .then(result => {
        return dispatch({
          type: `FETCH_${key}_SUCCESS`,
          payload: result,
        })
      })
      .catch(err => {
        console.error(err.stack)
        return dispatch({
          type: `FETCH_${key}_ERROR`,
          error: true,
          payload: err.message,
        })
      })
  }
}

// Exported action creators to be called from page components
export const fetchDashboard = fetchData({ key: 'DASHBOARD' })
export const fetchKPI = type => fetchData({ key: 'KPI', type })
