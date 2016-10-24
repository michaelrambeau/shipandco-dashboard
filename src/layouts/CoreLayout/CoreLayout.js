import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
// import 'bulma/sass/utilities/_all.sass'
// import 'bulma/sass/base/_all.sass'
import '../../styles/core.scss'
// import 'bulma/sass/components/nav.sass'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
