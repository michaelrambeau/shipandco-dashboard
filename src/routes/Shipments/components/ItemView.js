import React, { PropTypes } from 'react'
import Shipment from 'components/Shipment'

const ItemView = ({ item }) => (
  <section className="section">
    <div className="container">
      {item ? (
        <Shipment shipment={item} />
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
