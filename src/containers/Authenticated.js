import React from 'react'
import { connect } from 'react-redux'
import { actions as Auth } from 'store/auth'

function Authenticated (Component) {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      auth: React.PropTypes.object.isRequired
    }

    static contextTypes = {
      store: React.PropTypes.any,
      router: React.PropTypes.any
    }

    componentWillMount () {
      const { auth } = this.props
      this.checkAuth(auth.isAuthenticated)
    }

    componentWillReceiveProps (nextProps) {
      // this.checkAuth(nextProps.isAuthenticated)
    }

    checkAuth (isAuthenticated) {
      const { store: { dispatch }, router } = this.context
      // const { auth } = this.props
      // const isLoggedIn = Auth.isAuthenticated()
      // const userExists = !!auth.user
      // const tokenExists = !!auth.token
      //
      // if (!userExists || !tokenExists) {
      //   dispatch(Auth.setup())
      // }
      dispatch(Auth.checkAuth())
      // if (!isLoggedIn) {
      //   router.replace('/login')
      // }
    }

    render () {
      const { auth, children } = this.props
      console.info('Authenticated container', auth);
      return (
        <div>
          {auth.isAuthenticated === true
          ? <Component {...this.props}>{children}</Component>
          : <div>Not authenticated!{children}</div>
          }
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    auth: state.auth
  })

  return connect(mapStateToProps)(AuthenticatedComponent)
}

export default Authenticated

// export default Component => (props, children) => (
//   <Component {...props}>{children}</Component>
// )
