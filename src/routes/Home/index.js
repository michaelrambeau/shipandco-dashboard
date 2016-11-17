import Home from './containers/HomeContainer'
import Auth from 'containers/AuthWrapper'
import { fetchDashboard } from 'store/actionCreators'

export default (store) => ({
  getComponent: (state, cb) => {
    store.dispatch(fetchDashboard())
    const Container = Auth(Home)
    cb(null, Container)
  }
})
