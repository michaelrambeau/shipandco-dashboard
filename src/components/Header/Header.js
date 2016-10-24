import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import logo from './logo.svg'
// import AppBar from 'material-ui/AppBar'
// import { AppBar} from 'react-toolbox/lib/app_bar'
// import AppBar from 'react-toolbox/lib/app_bar'

export const Header = () => (
  <nav className="nav has-shadow">
    <div className="container">
      <div className="nav-left">
        <IndexLink to="/" className="nav-item is-brand" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <img src={logo} alt="logo" width="120" height="44" style={{ maxHeight: 44, transform: 'translateY(-7px)' }} />
        </IndexLink>
        <IndexLink to="/" activeClassName="is-active" className="nav-item is-tab">
          Dashboard
        </IndexLink>
        <Link to="/users" activeClassName="is-active" className="nav-item is-tab">
          Customers
        </Link>
        <Link to="/orders" activeClassName="is-active" className="nav-item is-tab">
          Orders
        </Link>
        <Link to="/shipments" activeClassName="is-active" className="nav-item is-tab">
          Shipments
        </Link>
        {false && <Link to="/about" activeClassName="is-active" className="nav-item is-tab">
          About
        </Link>}
      </div>
    </div>
  </nav>
)
// export const Header = () => (
//   <AppBar fixed flat title="Ship&co dashboard">
//     <a href="/home">React Toolbox Docs</a>
//   </AppBar>
// )

export default Header
