import React, { PropTypes } from 'react'
import Shop from 'components/Shop'
import Loading from 'components/utils/Loading'

const ItemView = ({ item }) => (
  <section className="section">
    <div className="container">
      {item ? (
        <Shop shop={item} />
      ) : (
        <Loading />
      )}
    </div>
  </section>
)

ItemView.propTypes = {
  item: PropTypes.object
}

export default ItemView
