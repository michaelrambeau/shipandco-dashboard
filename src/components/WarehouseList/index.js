import React, { PropTypes } from 'react'
// import { browserHistory as history } from 'react-router'

import AddressRomaji from 'components/AddressFromCompact'
import AddressKanji from 'components/AddressFromCompact/AddressKanji'

const Table = ({ warehouses, count, defaultWarehouseId }) => {
  if (!warehouses || warehouses.length === 0) return <div>No warehouse</div>
  return (
    <div>
      <table className="table clickable is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Address (romaji)</th>
            <th>Address (kanji)</th>
          </tr>
        </thead>
        <tbody>
          {warehouses.map(wh =>
            <Row
              warehouse={wh}
              key={wh._id}
              isDefault={wh._id === defaultWarehouseId}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  warehouses: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  defaultWarehouseId: PropTypes.string,
}
export default Table

// const goToWarehouse = shop => () => history.push(`/shops/${shop._id}`)

const Row = ({ warehouse, isDefault }) => {
  return (
    <tr className={isDefault ? 'is-active-row' : ''}>
      <td>
        <div className="is-primary">
          {warehouse.name}
        </div>
        {isDefault && <span className="empty">Default warehouse</span>}
      </td>
      <td>
        {warehouse.address.company}
        <br />
        {warehouse.address.company_kanji}
        <br />
        {warehouse.address.phone}
        <br />
        {warehouse.address.email}
        <br />
      </td>
      <td>
        <AddressRomaji address={warehouse.address} />
      </td>
      <td>
        <AddressKanji address={warehouse.address} />
      </td>
    </tr>
  )
}

Row.propTypes = {
  warehouse: PropTypes.object.isRequired,
  isDefault: PropTypes.bool.isRequired,
}
