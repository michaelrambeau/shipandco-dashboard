import { connect } from 'react-redux'

import View from 'components/User'

const mapStateToProps = (state, props) => {
  const id = props.params.id
  const user = state.entities.users[id]
  return {
    user
  }
}

export default connect(mapStateToProps)(View)
