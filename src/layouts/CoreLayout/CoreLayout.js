import React from 'react'

import Header from '../../containers/HeaderContainer'
import TimeAgo from 'components/utils/TimeAgo'

import './CoreLayout.scss'
import '../../styles/core.scss'

const updatedAt = new Date(process.env.BUILD_DATE)

export const CoreLayout = ({ children }) =>
  <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
    <Header />
    <div style={{ flex: 1 }}>
      {children}
    </div>
    <footer className="footer">
      <div className="container">
        <p>
          <span>SHIP&CO Dashboard</span>
          <span className="tag is-primary" style={{ marginLeft: '.5rem' }}>
            Staff only!
          </span>
        </p>
        <p>
          Last update: <TimeAgo datetime={updatedAt} />
        </p>
      </div>
    </footer>
  </div>

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
