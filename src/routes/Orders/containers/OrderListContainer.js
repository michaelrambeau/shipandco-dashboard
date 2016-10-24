import { connect } from 'react-redux'

import View from '../components/OrderListView'

const mapStateToProps = (state) => {
  const orders = Object.keys(state.entities.orders)
    .map(id => state.entities.orders[id])
  return {
    orders
  }
}

export default connect(mapStateToProps)(View)
