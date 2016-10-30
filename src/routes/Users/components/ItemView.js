import React, { PropTypes } from 'react'
import User from 'components/User'

const ItemView = ({ item, children }) => (
  <section className="section">
    <div className="container">
      {item ? (
        <div>
          <User user={item} />
          {children}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  </section>
)

ItemView.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default ItemView
