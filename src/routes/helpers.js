import { fetchItemListRequest, fetchItem } from 'store/actionCreators'
import createListViewContainer from 'containers/createListViewContainer'
import createItemViewContainer from 'containers/createItemViewContainer'

// Return a `getComponent()` function used in routes to dynamically load components
// Used for 'list of items' routes (with pagination) `/<model>/`
export const getListViewComponent = (model, View, { $sort, $limit } = {}) => store => (state, cb) => {
  const query = state.location.query
  const page = query.page
  const pageNumber = page && !isNaN(page) ? parseInt(page, 0) : 1
  const pageIndex = pageNumber - 1
  const pageSize = $limit
  const $skip = page ? pageIndex * pageSize : 0
  store.dispatch(fetchItemListRequest(model, { $skip, $limit, $sort }))
  const Container = createListViewContainer(model, View, { pageNumber, pageSize })
  cb(null, Container)
}

// Return a `getComponent()` route used for 'item view details' routes `/<model>/:id`
export const getItemViewComponent = (model, View) => store => (state, cb) => {
  const id = state.params.id
  store.dispatch(fetchItem(model, id))
  const Container = createItemViewContainer(model, View)
  cb(null, Container)
}
