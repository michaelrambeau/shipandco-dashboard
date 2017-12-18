import { connect } from 'react-redux'
import React from 'react'

import KPIView from '../components/KPIView'
import { fetchKPI } from 'store/actionCreators'

const mapStateToProps = state => {
  const kpi = state.kpi
  return {
    data: kpi.results,
    loading: kpi.loading,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: params => dispatch(fetchKPI(params)),
  // onRefresh: () => dispatch(fetchDashboard()),
})

class KPIContainer extends React.Component {
  constructor(props) {
    super(props)
    this.onChangeFilter = this.onChangeFilter.bind(this)
    this.state = {
      query: {
        shop: '*',
        carrier: '*',
        user: '*',
      },
    }
  }
  componentWillMount() {
    this.props.fetchData()
  }
  onChangeFilter({ key, value }) {
    const query = Object.assign({}, this.state.query, { [key]: value })
    this.setState({ query })
    this.props.fetchData({ query })
  }
  render() {
    return (
      <KPIView
        {...this.props}
        query={this.state.query}
        onChangeFilter={this.onChangeFilter}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KPIContainer)
