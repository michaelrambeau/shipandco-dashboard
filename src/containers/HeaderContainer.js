import { connect } from 'react-redux'
import Header from 'components/Header'

import React from 'react'

// Container created to pass router context to <Header> component
class HeaderWithContext extends React.Component {
  static contextTypes = {
    store: React.PropTypes.any,
    router: React.PropTypes.any
  }
  render () {
    const router = this.context.router
    return (
      <Header {...this.props} router={router}>
        {this.props.children}
      </Header>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    user: state.auth.user && state.auth.user.auth0
  }
}

export default connect(mapStateToProps)(HeaderWithContext)
