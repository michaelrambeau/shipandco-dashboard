import { connect } from 'react-redux'

import HomeView from '../components/HomeView'

const mapStateToProps = (state) => {
  const { counters } = state.dashboard
  return {
    counters
  }
}

export default connect(mapStateToProps)(HomeView)
