import get from 'lodash.get'

const isJapan = country => !country || country.toUpperCase() === 'JAPAN'

function getArea(user) {
  const address = get(user, 'settings.defaultWarehouse.address') || {}
  const { province, country } = address
  return isJapan(country) ? province : 'overseas'
}

export default getArea
