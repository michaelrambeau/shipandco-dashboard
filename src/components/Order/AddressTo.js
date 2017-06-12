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

const Empty = () => <span className="empty">(empty)</span>

const To = ({ address }) => (
  <div>
    <Item label="Name">
      {address.name || <Empty />}
    </Item>
    <Item label="Address #1">
      {address.address1 || <Empty />}
      </Item>
    <Item label="Address #2">
      {address.address2 || <Empty />}
    </Item>
    <Item label="City">
      {address.city || <Empty />}
    </Item>
    <Item label="Zip Code">
      {address.zip || <Empty /> }
    </Item>
    <Item label="Province Code">
      {address.province_code || <Empty />}
    </Item>
    <Item label="Country">
      <Flag countryCode={address.country_code} />
      {' '}
      {address.country}
    </Item>
  </div>
)

export default To
