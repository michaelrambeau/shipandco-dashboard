import Home from './containers/HomeContainer'
import Auth from 'containers/AuthWrapper'

export default {
  component: Auth(Home)
}
