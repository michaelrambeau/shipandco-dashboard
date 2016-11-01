import React from 'react'

const Table = ({ products }) => (
  <table className="table">
    <thead>
      <tr>
        <th>HS Code</th>
        <th>HS Description</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, i) => (
        <Row product={product} key={i} />
      ))}
    </tbody>
  </table>
)

const Row = ({ product }) => (
  <tr>
    <td>{product.hsCode}</td>
    <td>{product.hsDescription}</td>
    <td>{product.countryCode}</td>
  </tr>
)

export default Table
