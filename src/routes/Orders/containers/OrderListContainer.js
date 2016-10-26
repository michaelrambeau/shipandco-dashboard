import { connect } from 'react-redux'

import View from '../components/OrderListView'

const mapStateToProps = (state) => {
  const data = state.lists.orders
  const { items, total } = data
  return {
    orders: items,
    total
  }
}

export default connect(mapStateToProps)(View)
