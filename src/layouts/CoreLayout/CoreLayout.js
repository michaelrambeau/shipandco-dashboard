import React from 'react'
import Header from '../../containers/HeaderContainer'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div style={{ height: '100%' }}>
    <Header />
    <div style={{ height: '100%' }}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
