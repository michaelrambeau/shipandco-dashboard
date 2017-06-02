import AuthenticatedWrapper from './AuthenticatedWrapper'
import { connect } from 'react-redux'
import { actions } from 'store/auth'
import React from 'react'

function Authenticated (Component) {
  const Wrap = Component => {
    class MyComp extends Component {
      render () {
        return super.render()
      }
    }
    return MyComp
  }
  // const wrap = Component => {
  //   class MyComp extends React.Component {
  //     render () {
  //       return (
  //         <Component {...this.props}>{this.props.children}</Component>
  //       )
  //     }
  //   }
  //   return MyComp
  // }
  const AuthenticatedComponent = AuthenticatedWrapper(Component)
  // const AuthenticatedComponent = Wrap(Component)
  const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    actions
  })

  return connect(mapStateToProps)(AuthenticatedComponent)
}

export default Authenticated
