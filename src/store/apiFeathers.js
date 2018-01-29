import config from './config'

function request(url, options) {
  return fetch(url, options).then(response => {
    if (response.status >= 400) {
      throw new Error(`Bad response (${response.status}) from server ${url}`)
    }
    return response.json()
  })
}

function requestWithToken(token) {
  return function(url, options = {}) {
    const headers = {
      ...options.headers,
      authorization: token,
    }
    const reqOptions = {
      ...options,
      headers,
    }
    return request(url, reqOptions)
  }
}

function getEndPoint(model) {
  const endPoints = {
    users: 'customers',
  }
  return endPoints[model] || model
}

// const API_BASE_URL = 'http://localhost:3030'
// const API_BASE_URL = 'https://shipandco-api-pmkosuzmoe.now.sh'
const API_BASE_URL = config.apiBaseUrl

export function apiFetchItemList(
  token,
  model,
  { $limit, $sort, $skip, query }
) {
  const endPoint = getEndPoint(model)
  const defaultParams = {
    $limit: 10,
    $sort: '-createdAt',
    $skip: 0,
  }
  const params = Object.assign({}, defaultParams, {
    $limit,
    $skip,
    $sort,
    ...query,
  })
  const urlParams = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')
  const url = `${API_BASE_URL}/${endPoint}?${urlParams}`
  return requestWithToken(token)(url)
}

export function apiFetchItem(token, model, id) {
  const endPoint = getEndPoint(model)
  const url = `${API_BASE_URL}/${endPoint}/${id}?$limit=100&$sort=-createdAt`
  return requestWithToken(token)(url)
}

export function apiFetchData({ token, key, query }) {
  const mapping = {
    KPI: 'kpi/shipments',
  }
  const endPoint = mapping[key] || key
  const url = `${API_BASE_URL}/${endPoint}`
  const qs = Object.keys(query)
    .map(k => `${k}=${query[k]}`)
    .join('&')
  const fullUrl = qs ? `${url}?${qs}` : url
  return requestWithToken(token)(fullUrl)
}
