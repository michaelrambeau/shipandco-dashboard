import Home from './containers/HomeContainer'
import Auth from 'containers/AuthWrapper'

// Sync route definition
export default {
  component : Auth(Home)
}
