import React, { PropTypes } from 'react'
import User from 'components/User'
import Loading from 'components/utils/Loading'

const ItemView = ({ item, children }) => {
  return (
    <section className="section">
      <div className="container">
        {item && item !== 'ERROR' ? (
          <div>
            <User user={item} />
            {children}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  )
}

ItemView.propTypes = {
  // item: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default ItemView
