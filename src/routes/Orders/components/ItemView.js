import React, { PropTypes } from 'react'
import Order from 'components/Order'

const ItemView = ({ item }) => (
  <section className="section">
    <div className="container">
      {item ? (
        <Order order={item} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  </section>
)

ItemView.propTypes = {
  item: PropTypes.object.isRequired
}

export default ItemView
