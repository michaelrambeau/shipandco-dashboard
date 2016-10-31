import React, { PropTypes } from 'react'
import Shop from 'components/Shop'

const ItemView = ({ item }) => (
  <section className="section">
    <div className="container">
      {item ? (
        <Shop shop={item} />
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
