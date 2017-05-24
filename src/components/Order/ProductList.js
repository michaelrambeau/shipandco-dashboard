import React from 'react'

const Table = ({ products }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>HS Code</th>
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
    <td>{product.name || product.name}</td>
    <td>
      {product.hsCode || product.hs_code}<br />
      {product.hsDescription || product.hs_description}
    </td>
    <td>{product.countryCode || product.origin_country}</td>
  </tr>
)

export default Table
