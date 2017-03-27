import React, { PropTypes } from 'react'

import Order from 'components/Order'
import AlreadyShipped from 'components/Order/AlreadyShipped'

function getComponent (item) {
  if (!item) return <div>Loading</div>
  if (item.state === 'shipped') return <AlreadyShipped item={item} />
  return <Order order={item} />
}

const ItemView = ({ item }) => (
  <section className="section">
    <div className="container">
      {getComponent(item)}
    </div>
  </section>
)

ItemView.propTypes = {
  item: PropTypes.object.isRequired
}

export default ItemView
