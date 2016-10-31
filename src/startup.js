import { fetchDashboard } from './store/actionCreators'

export default function startup (store) {
  store.dispatch(fetchDashboard())
  // store.dispatch(fetchItemListRequest('users'))
  // store.dispatch(fetchItemListRequest('orders'))
}
