import React from 'react'
import Flag from 'components/utils/Flag'

const Item = ({ label, children }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label className="label">{label}</label>
    <p className="control">
      {children}
    </p>
  </div>
)

const From = ({ address }) => (
  <div>
    <Item label="Name">{address.name}</Item>
    <Item label="Address #1">{address.address1}</Item>
    <Item label="Address #2">{address.address2}</Item>
    <Item label="City">{address.city}</Item>
    <Item label="Zip code">{address.zip}</Item>
    <Item label="Country">
      <Flag countryCode={address.country_code} />
      {' '}
      {address.country}
    </Item>
  </div>
)

export default From
