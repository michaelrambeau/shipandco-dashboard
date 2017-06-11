import React from 'react'

import Flag from 'components/utils/Flag'

const From = ({ address }) => (
  <div>
    {address.address1}<br />
    {address.address2}<br />
    {address.city}<br />
    {address.zip}<br />
    <Flag countryCode={address.country_code} />
    {' '}
    {address.country}
  </div>
)

export default From
