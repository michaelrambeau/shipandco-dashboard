import React from 'react'

import Flag from 'components/utils/Flag'

const From = ({ address }) => {
  const values = [address.address1, address.address2, address.city, address.zip]
  return (
    <div>
      {values.map((value, i) => {
        if (!value)
          return (
            <div key={i} className="empty">
              (empty)
            </div>
          )
        return (
          <div key={i}>
            {value}
          </div>
        )
      })}
      <Flag countryCode={address.country_code} /> {address.country}
    </div>
  )
}

export default From
