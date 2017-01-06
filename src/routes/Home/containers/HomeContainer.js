import { connect } from 'react-redux'

import HomeView from '../components/HomeView'

const mapStateToProps = (state) => {
  const { counters } = state.dashboard
  const { loading } = state.ui
  return {
    counters,
    loading
  }
}

export default connect(mapStateToProps)(HomeView)
