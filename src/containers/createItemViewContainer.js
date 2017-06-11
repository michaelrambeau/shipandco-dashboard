import React from 'react'
import { connect } from 'react-redux'

import { fetchItem } from 'store/actionCreators'

const mapStateToProps = model => (state, props) => {
  const id = props.params.id
  const item = state.entities[model][id]
  return {
    item
  }
}

const mapDispatchToProps = (model) => dispatch => ({
  fetchData: (id) => dispatch(fetchItem(model, id))
})

function createContainer (View, options) {
  return class Container extends React.Component {
    componentWillMount () {
      const id = this.props.params.id
      this.props.fetchData(id)
    }
    render () {
      return <View {...this.props} />
    }
  }
}

export default (model, View) =>
  connect(
    mapStateToProps(model),
    mapDispatchToProps(model)
  )(createContainer(View))
