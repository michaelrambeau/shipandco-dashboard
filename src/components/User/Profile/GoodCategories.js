import React from 'react'

const Categories = ({ categories = [] }) =>
  <div className="box">
    <h3 className="title is-4">Goods Categories</h3>
    {categories.length > 0
      ? <table className="table is-striped">
          <thead>
            <tr>
              <td>HS Code</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => <Row key={cat.hsCode} category={cat} />)}
          </tbody>
        </table>
      : <div className="">No Goods Categories</div>}
  </div>

const Row = ({ category }) =>
  <tr>
    <td>
      {category.hsCode}
    </td>
    <td>
      {category.description}
    </td>
  </tr>

export default Categories
