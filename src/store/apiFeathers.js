import config from './config'

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

// const API_END_POINT = 'http://localhost:3030'
// const API_END_POINT = 'https://shipandco-api-pmkosuzmoe.now.sh'
const API_END_POINT = config.apiBaseUrl

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

export function apiFetchDashboad () {
  const url = `${API_END_POINT}/dashboard`
  return request(url)
}
