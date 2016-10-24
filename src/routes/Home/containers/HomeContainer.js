import { connect } from 'react-redux'

import HomeView from '../components/HomeView'

const mapStateToProps = (state) => {
  const counters = {
    shipments: state.shipments.total,
    users: Object.keys(state.entities.users).length
  }
  return {
    counters
  }
}

export default connect(mapStateToProps)(HomeView)
