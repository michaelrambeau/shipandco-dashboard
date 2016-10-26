import { connect } from 'react-redux'

import View from '../components/ShipmentListView'

const mapStateToProps = (state) => {
  const data = state.lists.shipments
  const { items, total } = data
  return {
    shipments: items,
    total
  }
}

export default connect(mapStateToProps)(View)
