function request (url, options) {
  console.log('API request', url)
  return fetch(url)
    .then(r => r.json())
}

function getEndPoint (model) {
  const endPoints = {
    'users': 'customers'
  }
  return endPoints[model] || model
}

const API_END_POINT = 'http://localhost:3030'
// const API_END_POINT = 'https://shipandco-api-pmkosuzmoe.now.sh'
// const API_END_POINT = 'https://shipandco-api-ukcdixwumu.now.sh'

export function apiFetchItemList (model, options = {}) {
  const endPoint = getEndPoint(model)
  const defaultParams = {
    $limit: 10,
    $sort: '-createdAt',
    $skip: 0
  }
  const params = {
    ...defaultParams,
    ...options
  }
  const urlParams = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')
  const url = `${API_END_POINT}/${endPoint}?${urlParams}`
  return request(url)
}

export function apiFetchItem (model, id) {
  const endPoint = getEndPoint(model)
  const url = `${API_END_POINT}/${endPoint}/${id}?$limit=100&$sort=-createdAt`
  return request(url)
}

// export function apiFetchUserList () {
//   const fields = ['createdAt', 'emails', '_id', 'profile', 'carriers']
//     .map(f => `$select=${f}`)
//     .join('&')
//   const url = `${API_END_POINT}/customers?$limit=100&${fields}&$sort=-createdAt`
//   return request(url).then(json => json.data)
// }
//
// export function apiFetchOrderList () {
//   const fields = [
//     'date',
//     'userId',
//     'type',
//     'customerName',
//     'identifier',
//     'data.shipping_address',
//     'data.currency',
//     'data.total_price'
//   ]
//     .map(f => `$select=${f}`)
//     .join('&')
//   const url = `${API_END_POINT}/orders?state=active&$limit=100&${fields}&$sort=-date`
//   return request(url).then(json => json.data)
// }
//
// export function apiFetchShipmentList () {
//   const url = `${API_END_POINT}/shipments?&$limit=10&$sort=-date`
//   return request(url)
// }
//
// export function apiFetchUser (id) {
//   const url = `${API_END_POINT}/customers/${id}`
//   console.log('API request', url)
//   return request(url)
// }
// export function apiFetchOrder (id) {
//   const url = `${API_END_POINT}/orders/${id}`
//   console.log('API request', url)
//   return request(url)
// }
