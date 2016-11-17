import { connect } from 'react-redux'
import Header from 'components/Header'

function mapStateToProps (state) {
  return {
    user: state.auth.user && state.auth.user.auth0
  }
}

export default connect(mapStateToProps)(Header)
