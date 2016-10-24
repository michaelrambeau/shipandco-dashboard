function request (url, options) {
  return fetch(url)
    .then(r => r.json())
}

const API_END_POINT = 'http://localhost:3001/api'

export function fetchUsers () {
  const filter = {
    limit: 100,
    order: 'createdAt DESC'
  }
  const url = `${API_END_POINT}/customers?filter=${JSON.stringify(filter)}`
  console.log('API request', url)
  return request(url)
}
