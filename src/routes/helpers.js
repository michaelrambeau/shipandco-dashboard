import { fetchItemListRequest, fetchItem } from 'store/actionCreators'
import createListViewContainer from 'containers/createListViewContainer'
import createItemViewContainer from 'containers/createItemViewContainer'

// Return a `getComponent()` function used in routes to dynamically load components
// Used for 'list of items' routes (with pagination) `/<model>/`
export const getListViewComponent = (model, View, { $sort, $limit = 100 }) => store => (state, cb) => {
  const { page } = state.location.query
  const id = state.params.id
  const pageNumber = (page && !isNaN(page)) ? parseInt(page, 0) : 1
  const pageIndex = pageNumber - 1
  const pageSize = $limit
  const $skip = page ? pageIndex * pageSize : 0
  const defaultOptions = {
    $limit: 100,
    $sort: '-date'
  }
  const options = Object.assign({}, defaultOptions, {
    $sort,
    $limit,
    $skip
  })
  if (id) {
    options.query = {
      userId: id
    }
  }
  store.dispatch(fetchItemListRequest(model, options))
  const Container = createListViewContainer(model, View, { pageNumber, pageSize, userId: id })
  cb(null, Container)
}

// Return a `getComponent()` route used for 'item view details' routes `/<model>/:id`
export const getItemViewComponent = (model, View) => store => (state, cb) => {
  const id = state.params.id
  store.dispatch(fetchItem(model, id))
  const Container = createItemViewContainer(model, View)
  cb(null, Container)
}
