import React from 'react'

const Table = ({ parcels }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Width</th>
        <th>Height</th>
        <th>length</th>
        <th>Weight</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {parcels.map((parcel, i) => (
        <Row parcel={parcel} key={i} />
      ))}
    </tbody>
  </table>
)

const Row = ({ parcel }) => (
  <tr>
    <td>{parcel.width}</td>
    <td>{parcel.height}</td>
    <td>{parcel.length}</td>
    <td>{parcel.weight}</td>
    <td>{parcel.amount}</td>
  </tr>
)

export default Table
