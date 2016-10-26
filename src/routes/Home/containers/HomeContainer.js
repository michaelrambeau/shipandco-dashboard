import { connect } from 'react-redux'

import HomeView from '../components/HomeView'

const mapStateToProps = (state) => {
  const counters = {
    shipments: state.lists.shipments.total,
    users: state.lists.users.total,
    orders: state.lists.orders.total
    // shops: state.lists.shops.total
  }
  return {
    counters
  }
}

export default connect(mapStateToProps)(HomeView)
