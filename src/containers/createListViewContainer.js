import { connect } from 'react-redux'

// const mapStateToProps = model => (state, props) => {
//   const items = state.entities[model]
//   return {
//     [model]: items
//   }
// }

// export default function (model, View) {
//   connect(mapStateToProps)(View)
// }

const mapStateToProps = (model, options) => (state) => {
  const { pageNumber, pageSize, userId } = options
  const data = state.lists[model]
  const loading = state.ui.loading
  const { items, total } = data
  return {
    items,
    total,
    pageNumber,
    pageSize,
    loading,
    userId
  }
}

export default (model, View, options) => connect(mapStateToProps(model, options))(View)
