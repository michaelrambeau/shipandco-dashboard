// import { FETCH_USERS_SUCCESS } from './store/actionTypes'
import { fetchUserListRequest, fetchOrderListRequest, fetchShipmentListRequest } from './store/actionCreators'

// const users = [
//   {
//     _id: '123',
//     name: 'Mike'
//   }
// ]

export default function startup (store) {
  store.dispatch(fetchUserListRequest())
  store.dispatch(fetchOrderListRequest())
  store.dispatch(fetchShipmentListRequest())
  // return store.dispatch({
  //   type: FETCH_USERS_SUCCESS,
  //   payload: {
  //     users
  //   }
  // })
}
