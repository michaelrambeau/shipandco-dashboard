function request (url, options) {
  console.log('API request', url)
  return fetch(url)
    .then(r => r.json())
}

// const API_END_POINT = 'http://localhost:3030'
// const API_END_POINT = 'https://feathers-app-ymqogedpqa.now.sh'
const API_END_POINT = 'https://shipandco-api-pmkosuzmoe.now.sh'

export function apiFetchUserList () {
  const fields = ['createdAt', 'emails', '_id', 'profile', 'carriers']
    .map(f => `$select=${f}`)
    .join('&')
  const url = `${API_END_POINT}/customers?$limit=100&${fields}&$sort=-createdAt`
  return request(url).then(json => json.data)
}

export function apiFetchOrderList () {
  const fields = [
    'date',
    'userId',
    'type',
    'customerName',
    'identifier',
    'data.shipping_address',
    'data.currency',
    'data.total_price'
  ]
    .map(f => `$select=${f}`)
    .join('&')
  const url = `${API_END_POINT}/orders?state=active&$limit=100&${fields}&$sort=-date`
  return request(url).then(json => json.data)
}

export function apiFetchShipmentList () {
  const url = `${API_END_POINT}/shipments?&$limit=100&$sort=-date`
  return request(url)
}

export function apiFetchUser (id) {
  const url = `${API_END_POINT}/customers/${id}`
  console.log('API request', url)
  return request(url)
}
