import {
  apiFetchUserList,
  apiFetchOrderList,
  apiFetchShipmentList,
  apiFetchUser
} from './apiFeathers'
import {
  FETCH_USER_LIST_REQUEST,
  FETCH_USER_LIST_SUCCESS,
  FETCH_ORDER_LIST_REQUEST,
  FETCH_ORDER_LIST_SUCCESS,
  FETCH_SHIPMENT_LIST_REQUEST,
  FETCH_SHIPMENT_LIST_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from './actionTypes'

export function fetchUserListRequest () {
  return (dispatch) => {
    dispatch({
      type: FETCH_USER_LIST_REQUEST
    })
    return apiFetchUserList()
      .then(users => {
        dispatch({
          type: FETCH_USER_LIST_SUCCESS,
          payload: {
            users
          }
        })
      })
      .catch(err => console.error('Unable to fetch users', err))
  }
}
export function fetchOrderListRequest () {
  return (dispatch) => {
    dispatch({
      type: FETCH_ORDER_LIST_REQUEST
    })
    return apiFetchOrderList()
      .then(orders => {
        dispatch({
          type: FETCH_ORDER_LIST_SUCCESS,
          payload: {
            orders
          }
        })
      })
      .catch(err => console.error('Unable to fetch orders', err))
  }
}
export function fetchShipmentListRequest () {
  return (dispatch) => {
    dispatch({
      type: FETCH_SHIPMENT_LIST_REQUEST
    })
    return apiFetchShipmentList()
      .then(result => {
        dispatch({
          type: FETCH_SHIPMENT_LIST_SUCCESS,
          payload: result // { total: N, data: [] }
        })
      })
      .catch(err => console.error('Unable to fetch shipments', err))
  }
}

export function fetchUser (id) {
  return (dispatch, getState) => {
    const entities = getState().entities.users
    const user = entities[id]
    if (user && user.orders) {
      console.log('User data already loaded!')
    }
    return dispatch(fetchUserRequest(id))
  }
}

export function fetchUserRequest (id) {
  return (dispatch) => {
    dispatch({
      type: FETCH_USER_REQUEST,
      payload: {
        id
      }
    })
    return apiFetchUser(id)
      .then(user => {
        dispatch({
          type: FETCH_USER_SUCCESS,
          payload: {
            id,
            user
          }
        })
      })
      .catch(err => console.error('Unable to fetch user', err))
  }
}
