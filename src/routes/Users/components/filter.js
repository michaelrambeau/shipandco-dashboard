import get from 'lodash.get'

const filterByText = textFilter => user => {
  const name = user.profile && user.profile.name
  const email = user.emails && user.emails[0].address
  const re = new RegExp(textFilter, 'gi')
  if (name && re.test(name)) return true
  if (email && re.test(email)) return true
  return false
}

const getStatus = user => {
  if (!user.emails[0].verified) return 'not-verified'
  const freeShipments = user.freeShipments
  if (freeShipments === 10) return 'trial-not-started'
  if (freeShipments > 0) return 'trial-started'
  if (get(user, 'billing.customer_id')) return 'billing' // customers with valid billing data
  return 'trial-completed'
}

const filterByStatus = status => user => {
  if (status === '*') return true
  return getStatus(user) === status
}

const filterByShop = shopType => user => {
  if (shopType === '*') return true
  return user.shops.map(shop => shop.type).includes(shopType)
}

const filterByCarrier = carrier => user => {
  if (carrier === '*') return true
  const carriers = getUserCarriers(user)
  return carriers.includes(carrier)
}

function isJapanPostCustomer(japanpostSettings) {
  const numbers = japanpostSettings.customerNumbers
  if (!numbers) return false
  if (!Array.isArray(numbers)) return false
  return numbers.filter(x => !!x).length > 0
}

function getUserCarriers(user) {
  const carriers = user.carriers
  const keys = Object.keys(carriers)
  if (keys.length === 0) return []
  return keys.filter(key => !!carriers[key]).filter(key => {
    return key !== 'japanpost' || isJapanPostCustomer(carriers[key])
  })
}

export default function filterUser({ textFilter, status, shop, carrier }) {
  return function(user) {
    return (
      filterByStatus(status)(user) &&
      filterByText(textFilter)(user) &&
      filterByShop(shop)(user) &&
      filterByCarrier(carrier)(user)
    )
  }
}
