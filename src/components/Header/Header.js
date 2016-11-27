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
    isIndex: true
  },
  {
    path: '/users',
    text: 'Customers'
  },
  {
    path: '/shops',
    text: 'Shops'
  },
  {
    path: '/orders',
    text: 'Orders'
  },
  {
    path: '/shipments',
    text: 'Shipments'
  }
]

const Item = (props) => {
  const Component = isIndex ? IndexLink : Link
  // const { router } = this.context
  const isActive = true //router.isActive(path)
  const { path, text, isIndex } = props.navItem
  console.info(props);
  return (
    <Component to={path} className={`nav-item is-tab${isActive ? ' is-active' : ''}`}>
      {text}
    </Component>
  )
}

export const Header = ({ user, router }) => (
  <nav className="nav has-shadow">
    <div className="container">
      <div className="nav-left">
        {items.map(item => (
          <Item key={item.path} navItem={item} router={router} />
        ))}
      </div>
      <div className="nav-right">
        <div className="nav-item">
          { user ? user.name : 'Anonymous' }
        </div>
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
