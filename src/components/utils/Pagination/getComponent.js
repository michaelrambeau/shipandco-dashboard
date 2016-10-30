import { fetchItemListRequest } from 'store/actionCreators'
import createListViewContainer from 'containers/createListViewContainer'

const getComponent = (model, View) => store => (state, cb) => {
  const query = state.location.query
  const page = query.page
  const pageNumber = page && !isNaN(page) ? parseInt(page, 0) : 1
  const pageIndex = pageNumber - 1
  const pageSize = 50
  const $skip = page ? pageIndex * pageSize : 0
  store.dispatch(fetchItemListRequest(model, { $skip }))
  const Container = createListViewContainer(model, View, { pageNumber, pageSize })
  cb(null, Container)
}

export default getComponent
