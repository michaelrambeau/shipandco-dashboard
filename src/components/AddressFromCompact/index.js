import React from 'react'

import Flag from 'components/utils/Flag'

const From = ({ address }) => {
  const values = [
    address.address1,
    address.address2,
    address.city,
    address.zip
  ]
  return (
    <div>
      {values.map(value => {
        if (!value) return <div className="empty">(empty)</div>
        return <div>{value}</div>
      })}
      <Flag countryCode={address.country_code} />
      {' '}
      {address.country}
    </div>
  )
}

export default From
