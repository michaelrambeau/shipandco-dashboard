import config from './config'

function request (url, options) {
  return fetch(url, options)
    .then(response => {
      if (response.status >= 400) {
        throw new Error(`Bad response (${response.status}) from server ${url}`)
      }
      return response.json()
    })
}

function requestWithToken (token) {
  return function (url, options = {}) {
    const headers = {
      ...options.headers,
      authorization: token
    }
    const reqOptions = {
      ...options,
      headers
    }
    return request(url, reqOptions)
  }
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

export function apiFetchItemList (token, model, { $limit, $sort, $skip, query }) {
  const endPoint = getEndPoint(model)
  const defaultParams = {
    $limit: 10,
    $sort: '-createdAt',
    $skip: 0
  }
  const params = Object.assign({}, defaultParams, {
    $limit,
    $skip,
    $sort,
    ...query
  })
  const urlParams = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')
  const url = `${API_END_POINT}/${endPoint}?${urlParams}`
  return requestWithToken(token)(url)
}

export function apiFetchItem (token, model, id) {
  const endPoint = getEndPoint(model)
  const url = `${API_END_POINT}/${endPoint}/${id}?$limit=100&$sort=-createdAt`
  return requestWithToken(token)(url)
}

export function apiFetchDashboad (token) {
  const url = `${API_END_POINT}/dashboard`
  return requestWithToken(token)(url)
}
