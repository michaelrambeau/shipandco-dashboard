import { connect } from 'react-redux'

// Inject the user object as a `prop`

const mapStateToProps = (state, props) => {
  const id = props.params.id
  const user = state.entities.users[id]
  return {
    user
  }
}

export default (View) => connect(mapStateToProps)(View)
