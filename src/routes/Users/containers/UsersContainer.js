import { connect } from 'react-redux'

import View from '../components/UsersView'

const mapStateToProps = (state) => {
  const users = Object.keys(state.entities.users)
    .map(id => state.entities.users[id])
  return {
    users
  }
}

export default connect(mapStateToProps)(View)
