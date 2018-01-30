import React from 'react'
import { connect } from 'react-redux'
import get from 'lodash.get'

import KPIUsersView from '../components/KPIUsersView'
import { fetchKPI } from 'store/actionCreators'

const mapStateToProps = state => {
  const kpi = state.kpi
  return {
    data: {
      byMonth: get(kpi, 'results.byMonth'),
      byDay: get(kpi, 'results.byDay'),
      byMethod: get(kpi, 'results.byMethod'),
      paid: get(kpi, 'results.paid'),
    },
    loading: kpi.loading,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: ({ query } = {}) => {
    const options = { query: { ...query, type: 'customers' } }
    console.log('> Fetch', options)

    return dispatch(fetchKPI('customers')(options))
  },
})

class KPIUsersContainer extends React.Component {
  constructor(props) {
    super(props)
    // this.onChangeFilter = this.onChangeFilter.bind(this)
    this.state = {
      query: {},
    }
  }
  componentWillMount() {
    const { query } = this.state
    this.props.fetchData({ query })
  }
  render() {
    return <KPIUsersView {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KPIUsersContainer)
