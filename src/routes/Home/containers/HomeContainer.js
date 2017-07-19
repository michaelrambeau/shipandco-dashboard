import { connect } from 'react-redux'
import React from 'react'

import HomeView from '../components/HomeView'
import { fetchDashboard } from 'store/actionCreators'

const mapStateToProps = state => {
  const { counters, topUsers, lastShipments } = state.dashboard
  const { loading } = state.ui
  return {
    counters,
    topUsers,
    loading,
    lastShipments,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchDashboard()),
  onRefresh: () => dispatch(fetchDashboard()),
})

class Container extends React.Component {
  componentWillMount() {
    this.props.fetchData()
  }
  render() {
    return <HomeView {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
