import React, { PropTypes } from 'react'
import Shipment from 'components/Shipment'

const Item = ({ item }) => {
  if (!item) return <div>Loading</div>
  if (item === 'ERROR') return (
    <div className="notification is-warning">
      <p>This shipment does not exist (anymore).</p>
      <p>It may have been shipped <strong>outside</strong> Ship&co.</p>
    </div>
  )
  return <Shipment shipment={item} />
}

const ItemView = ({ item }) => (
  <section className="section">
    <div className="container">
      <Item item={item} />
    </div>
  </section>
)

ItemView.propTypes = {
  item: PropTypes.object.isRequired
}

export default ItemView
