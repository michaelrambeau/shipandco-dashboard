import { fetchDashboard } from './store/actionCreators'
import { authLoginSuccess } from './store/auth'

export default function startup (store, app) {
  // store.dispatch(fetchDashboard())
  // store.dispatch(fetchItemListRequest('users'))
  // store.dispatch(fetchItemListRequest('orders'))

  console.log('Startup: check if a token exists in the local storage')
  window.app = app
  // app.authenticate()
  //   .then(function (result) {
  //     console.info('Authenticated!', result)
  //     console.log('Your JWT is: ' + app.get('token'))
  //     const user = result.data
  //     store.dispatch(authLoginSuccess({
  //       user
  //     }))
  //   })
  //   .catch(function (error) {
  //     console.error('Unable to authenticate the user', error)
  //   })
}
