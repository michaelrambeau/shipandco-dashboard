import React, { PropTypes } from 'react'

import Order from 'components/Order'
import AlreadyShipped from 'components/Order/AlreadyShipped'
import Loading from 'components/utils/Loading'

const NotFound = () => (
  <div className="notification is-warning">
    Order not found!<br />
    It may have been shipped outside Ship&co.
  </div>
)

function getComponent (item) {
  if (!item) return <Loading />
  if (item === 'ERROR') return <NotFound />
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
  item: PropTypes.any
}

export default ItemView
