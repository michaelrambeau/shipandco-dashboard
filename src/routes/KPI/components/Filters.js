import React from 'react'

import carriersByKey from 'data/carriers'

const carriers = Object.keys(carriersByKey).map(key => ({
  value: key,
  text: carriersByKey[key].shortName || carriersByKey[key].name
}))

const Filters = ({ carrier, onChangeFilter }) => {
  const onChangeCarrier = e => {
    const comboBox = e.target
    const carrier = comboBox.options[comboBox.selectedIndex].value
    return onChangeFilter({ key: 'carrier', value: carrier })
  }
  return (
    <div className="field-body">
      <div className="field">
        <div className="control">
          <div className="select is-fullwidth">
            <select onChange={onChangeCarrier} value={carrier}>
              <option value="*">All carriers</option>
              {carriers.map(c =>
                <option key={c.value} value={c.value}>
                  {c.text}
                </option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
