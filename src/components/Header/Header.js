import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import logo from './logo.svg'
// import AppBar from 'material-ui/AppBar'
// import { AppBar} from 'react-toolbox/lib/app_bar'
// import AppBar from 'react-toolbox/lib/app_bar'

const items = [
  {
    path: '/',
    text: 'Dashboard',
    isIndex: true,
    icon: 'home',
  },
  {
    path: '/users',
    text: 'Customers',
  },
  {
    path: '/addresses',
    text: 'Address Book',
  },
  {
    path: '/shops',
    text: 'Shops',
  },
  {
    path: '/orders',
    text: 'Orders',
  },
  {
    path: '/shipments',
    text: 'Shipments',
  },
].filter(item => !item.disabled)

const Item = props => {
  const Component = isIndex ? IndexLink : Link
  const { router, navItem } = props
  const { path, text, isIndex, icon } = navItem
  const isActive = router.isActive(path, isIndex)

  return (
    <Component
      to={path}
      className={`nav-item is-tab${isActive ? ' is-active' : ''}`}
    >
      {icon
        ? <span className={`fa fa-${icon}`} />
        : <span>
            {text}
          </span>}
    </Component>
  )
}

export const Header = ({ user, router }) =>
  <nav className="nav has-shadow">
    <div className="container">
      <div className="nav-left">
        <IndexLink
          to="/"
          className="nav-item is-brand"
          style={{ paddingTop: 0, paddingBottom: 0 }}
        >
          <img
            src={logo}
            alt="logo"
            width="120"
            height="44"
            style={{ maxHeight: 44, transform: 'translateY(-7px)' }}
          />
        </IndexLink>
        {items.map(item =>
          <Item key={item.path} navItem={item} router={router} />
        )}
      </div>
      {false &&
        <div className="nav-right">
          <div className="nav-item">
            {user ? user.name : 'Anonymous'}
          </div>
        </div>}
    </div>
  </nav>

export default Header
