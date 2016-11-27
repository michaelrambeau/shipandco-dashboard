import { connect } from 'react-redux'
import Header from 'components/Header'

import React  from 'react'

const HeaderWithContext = React.createClass({
  render () {
    const router = this.context.router
    return (
      <Header {...this.props} router={router}>
        {this.props.children}
      </Header>
    )
  }
})

function mapStateToProps (state, props) {
  return {
    user: state.auth.user && state.auth.user.auth0,
    router: props.router
  }
}

export default connect(mapStateToProps)(HeaderWithContext)
