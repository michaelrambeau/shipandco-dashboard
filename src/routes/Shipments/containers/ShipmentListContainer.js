import { connect } from 'react-redux'

import View from '../components/ShipmentListView'

const mapStateToProps = (state) => {
  const shipments = Object.keys(state.entities.shipments)
    .map(id => state.entities.shipments[id])
  const total = state.shipments.total
  return {
    shipments,
    total
  }
}

export default connect(mapStateToProps)(View)
