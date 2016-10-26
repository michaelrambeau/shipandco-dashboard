import { connect } from 'react-redux'

import View from '../components/ShipmentView'

const mapStateToProps = (state, props) => {
  const id = props.params.id
  const shipment = state.entities.shipments[id]
  return {
    shipment
  }
}

export default connect(mapStateToProps)(View)
