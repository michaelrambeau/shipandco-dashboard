import { connect } from 'react-redux'

import View from '../components/OrderView'

const mapStateToProps = (state, props) => {
  const id = props.params.id
  const order = state.entities.orders[id]
  return {
    order
  }
}

export default connect(mapStateToProps)(View)
