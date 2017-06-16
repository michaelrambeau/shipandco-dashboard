import React from 'react'

import carriersByKey from 'data/carriers'

const carriers = Object.keys(carriersByKey).map(key => ({
  value: key,
  text: carriersByKey[key].shortName || carriersByKey[key].name
}))

const shops = [
  { value: 'amazon', text: 'Amazon' },
  { value: 'base', text: 'The Base' },
  { value: 'ebay', text: 'eBay' },
  { value: 'magento', text: 'Magento' },
  { value: 'nextengine', text: 'NextEngine' },
  { value: 'prestashop15', text: 'Prestashop' },
  { value: 'rakuten', text: 'Rakuten' },
  { value: 'shopify', text: 'Shopify' }
]

const SearchModule = ({
  textValue,
  onChangeText,
  onChangeStatus,
  onChangeShop,
  onChangeCarrier,
  status,
  carrier,
  shop
}) => {
  return (
    <div className="field-body" style={{ marginBottom: '2rem' }}>
      <div className="field">
        <p className="control has-icon">
          <input
            className="input"
            type="text"
            onChange={onChangeText}
            placeholder="Name or email"
            value={textValue}
          />
          <span className="icon is-small">
            <i className="fa fa-search" />
          </span>
        </p>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-fullwidth">
            <select onChange={onChangeStatus} value={status}>
              <option value="*">All statuses</option>
              <option value="trial-completed">
                Trial completed (no more free label)
              </option>
              <option value="trial-started">
                Trial started (&lt;10 free labels remaining)
              </option>
              <option value="trial-not-started">
                Trial not started (10 free labels)
              </option>
              <option value="not-verified">Not verified</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-fullwidth">
            <select onChange={onChangeCarrier} value={carrier}>
              <option value="*">All carriers</option>
              {carriers.map(c =>
                <option key={c.value} value={c.value}>{c.text}</option>
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <div className="select is-fullwidth">
            <select onChange={onChangeShop} value={shop}>
              <option value="*">All shops</option>
              {shops.map(s =>
                <option key={s.value} value={s.value}>{s.text}</option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModule
