import { connect } from 'react-redux'
import React from 'react'

import HomeView from '../components/HomeView'
import { fetchDashboard } from 'store/actionCreators'

const mapStateToProps = (state) => {
  const { counters } = state.dashboard
  const { loading } = state.ui
  return {
    counters,
    loading
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchDashboard())
})

class Container extends React.Component {
  componentWillMount () {
    this.props.fetchData()
  }
  render () {
    return <HomeView {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
