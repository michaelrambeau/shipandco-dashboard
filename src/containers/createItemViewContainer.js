import { connect } from 'react-redux'

const mapStateToProps = model => (state, props) => {
  const id = props.params.id
  const item = state.entities[model][id]
  return {
    item
  }
}

export default (model, View) => connect(mapStateToProps(model))(View)
