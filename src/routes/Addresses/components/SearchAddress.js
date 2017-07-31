import React from 'react'

// const areas = [
//   { text: 'KYOTO', value: 'KYOTO' },
//   { text: 'OSAKA', value: 'OSAKA' },
//   { text: 'KOMATSU', value: 'KOMATSU' },
// ]

const SearchAddress = ({
  areas,
  textValue,
  onChangeText,
  onChangeArea,
  area,
}) => {
  return (
    <div className="field-body" style={{ marginBottom: '2rem' }}>
      <div className="field">
        <p className="control has-icon">
          <input
            className="input"
            type="text"
            onChange={onChangeText}
            placeholder="Company name, email or city"
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
            <select onChange={onChangeArea} value={area}>
              <option value="*">All areas</option>
              {areas.map(area =>
                <option key={area.value} value={area.value}>
                  {area.text}
                </option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchAddress
