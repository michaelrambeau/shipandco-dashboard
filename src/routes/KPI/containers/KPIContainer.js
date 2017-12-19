import { connect } from 'react-redux'
import React from 'react'
import get from 'lodash.get'

import KPIView from '../components/KPIView'
import { fetchKPI } from 'store/actionCreators'

import byDay from './sample-by-day.json'
import byMonth from './sample-by-month.json'

const mapStateToProps = state => {
  const kpi = state.kpi
  return {
    data: {
      byMonth: get(kpi, 'results.byMonth'),
      byDay: get(kpi, 'results.byDay'),
    },
    loading: kpi.loading,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: ({ query } = {}) => {
    const options = { query: { ...query, type: 'all' } }
    return dispatch(fetchKPI(options))
  },
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
