import React from 'react'
import debounce from 'lodash.debounce'

function filterUser (textFilter) {
  return function (user) {
    const name = user.profile && user.profile.name
    const email = user.emails && user.emails[0].address
    const re = new RegExp(textFilter, 'gi')
    if (name && re.test(name)) return true
    if (email && re.test(email)) return true
    return false
  }
}

// Higher order component to add a filter text field above the User list
const filterList = (Component) => {
  return class List extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        textFilter: ''
      }
      this.onChange = this.onChange.bind(this)
      this.emitChangeDelayed = debounce(this.emitChange, 300)
    }
    emitChange (textFilter) {
      this.setState({
        textFilter
      })
    }
    onChange (e) {
      const textFilter = e.target.value
      this.emitChangeDelayed(textFilter)
    }
    render () {
      const { users } = this.props
      const { textFilter } = this.state
      const filteredItems = textFilter ? users.filter(filterUser(textFilter)) : users
      return (
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <p className="control has-icon">
              <input
                className="input"
                type="text"
                onChange={this.onChange}
                placeholder="Filter by name or by email"
              />
              <span className="icon is-small">
                <i className="fa fa-search" />
              </span>
            </p>
          </div>
          <Component users={filteredItems} />
        </form>
      )
    }
  }
}

export default filterList
