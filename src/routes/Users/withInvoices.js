import React from 'react'
import { connect } from 'react-redux'

const withInvoices = WrappedComponent => props => {
  const invoices = [{ amount: 200, date: new Date(), id: 1 }]
  const user = props.user
  console.log('Fetch invoices...', props)
  return <WrappedComponent invoices={invoices} {...props} />
}
export default withInvoices

// function fetchInvoices() {}

// function withInvoices(View, options) {
//   return class Container extends React.Component {
//     componentWillMount(nextProps) {
//       // const paginationOptions = getPaginationOptions(this.props, options)
//       // this.props.fetchData(paginationOptions)
//     }
//     componentWillReceiveProps(nextProps) {
//       // const pageNumber = getPageNumber(this.props)
//       // const query = getQuery(this.props)
//       // const nextPageNumber = getPageNumber(nextProps)
//       // const nextQuery = getQuery(nextProps)
//       // if (pageNumber !== nextPageNumber || nextQuery.carrier !== query.carrier) {
//       //   const paginationOptions = getPaginationOptions(nextProps, options)
//       //   this.props.fetchData(paginationOptions)
//       // }
//     }
//     render() {
//       return <View {...this.props} />
//     }
//   }
// }

// export default View =>
//   connect(mapStateToProps, mapDispatchToProps)(withInvoices(View))
