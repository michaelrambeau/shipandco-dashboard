import get from 'lodash.get'

import getArea from './getArea'

const filterByArea = area => user => {
  if (area === '*') return true
  const userArea = getArea(user)
  return userArea === area
}

const filterByText = textFilter => user => {
  const name = user.profile && user.profile.name
  const email = user.emails && user.emails[0].address
  const re = new RegExp(textFilter, 'gi')
  if (name && re.test(name)) return true
  if (email && re.test(email)) return true
  const company = get(user, 'settings.defaultWarehouse.address.company')
  if (company && re.test(company)) return true
  const city = get(user, 'settings.defaultWarehouse.address.city')
  if (city && re.test(city)) return true
  return false
}

export default function filterUser({ textFilter, area }) {
  return function(user) {
    return filterByText(textFilter)(user) && filterByArea(area)(user)
  }
}
