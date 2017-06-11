import React from 'react'
import { connect } from 'react-redux'
import get from 'lodash.get'

import { fetchItemListRequest } from 'store/actionCreators'

const mapStateToProps = (model, options) => (state, props) => {
  const pageNumber = getPageNumber(props)
  const query = getQuery(props)
  const paginationOptions = getPaginationOptions(props, options)
  const data = state.lists[model]
  const loading = state.ui.loading
  const { items, total } = data
  return {
    items,
    total,
    pageNumber,
    pageSize: paginationOptions.$limit,
    loading,
    userId: props.params.id,
    query
  }
}

const mapDispatchToProps = (model) => dispatch => ({
  fetchData: (options) => dispatch(fetchItemListRequest(model, options))
})

function getPageNumber (props) {
  const page = get(props, 'location.query.page') || '1'
  const pageNumber = !isNaN(page) ? parseInt(page, 0) : 1
  return pageNumber
}

function getQuery (props) {
  return get(props, 'location.query') || {}
}

function getPaginationOptions (props, options) {
  const defaultOptions = {
    $limit: 10,
    $sort: '-date'
  }
  const { $sort, $limit } = { ...defaultOptions, ...options }
  const pageNumber = getPageNumber(props)
  const id = props.userId
  const pageIndex = pageNumber - 1
  const pageSize = $limit
  const $skip = pageNumber > 1 ? pageIndex * pageSize : 0
  const paginationOptions = Object.assign({}, defaultOptions, {
    $sort,
    $limit,
    $skip
  })
  const carrier = get(props, 'location.query.carrier')
  const query = {}
  if (carrier) {
    query['shipment_infos.carrier'] = carrier
  }
  if (id) {
    query.userId = id
  }
  paginationOptions.query = query
  return paginationOptions
}

function createContainer (View, options) {
  return class Container extends React.Component {
    componentWillMount (nextProps) {
      const paginationOptions = getPaginationOptions(this.props, options)
      this.props.fetchData(paginationOptions)
    }
    componentWillReceiveProps (nextProps) {
      const pageNumber = getPageNumber(this.props)
      const query = getQuery(this.props)
      const nextPageNumber = getPageNumber(nextProps)
      const nextQuery = getQuery(nextProps)
      if (pageNumber !== nextPageNumber || nextQuery.carrier !== query.carrier) {
        const paginationOptions = getPaginationOptions(nextProps, options)
        this.props.fetchData(paginationOptions)
      }
    }
    render () {
      return <View {...this.props} />
    }
  }
}

export default (model, View, options) =>
  connect(
    mapStateToProps(model, options),
    mapDispatchToProps(model)
  )(createContainer(View, options))
