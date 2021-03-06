import React from 'react'
import Flag from 'components/utils/Flag'

const Empty = () => <span className="empty">(empty)</span>

const Item = ({ label, children }) =>
  <div style={{ marginBottom: '1rem' }}>
    <label className="label">
      {label}
    </label>
    <div className="control">
      {children}
    </div>
  </div>

const AddressFrom = ({ address }) =>
  <div>
    <Item label="Name">
      {[address.name, address.company].filter(item => !!item).map((item, i) =>
        <div key={i}>
          {item}
        </div>
      )}
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
      {address.zip || <Empty />}
    </Item>
    <Item label="Country">
      <Flag countryCode={address.country_code} /> {address.country}
    </Item>
  </div>

export default AddressFrom
