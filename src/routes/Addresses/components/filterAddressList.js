import React from 'react'
import debounce from 'lodash.debounce'

import filterUser from './filter'
import SearchModule from './SearchAddress'

// Higher order component to add a filter text field above the User list
const filterAddressList = (Component, { areas }) => {
  return class List extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        textValue: '',
        textFilter: '',
        area: '*',
      }
      this.onChangeText = this.onChangeText.bind(this)
      this.onChangeArea = this.onChangeArea.bind(this)
      this.onClickReset = this.onClickReset.bind(this)
      this.emitChangeDelayed = debounce(this.emitChange, 300)
    }
    emitChange(textFilter) {
      this.setState({
        textFilter,
      })
    }
    onChangeArea(e) {
      const comboBox = e.target
      const area = comboBox.options[comboBox.selectedIndex].value
      this.setState({
        area,
      })
    }
    onChangeText(e) {
      const textValue = e.target.value
      this.setState({
        textValue,
      })
      this.emitChangeDelayed(textValue)
    }
    onClickReset(e) {
      const textValue = ''
      const textFilter = ''
      const area = '*'
      this.setState({
        area,
        textValue,
        textFilter,
      })
    }
    render() {
      const { users } = this.props
      const { textValue, textFilter, area } = this.state
      const isFiltered = textFilter || area !== '*'
      const filteredItems = isFiltered
        ? users.filter(filterUser({ textFilter, area }))
        : users
      return (
        <form>
          <SearchModule
            areas={areas}
            onChangeText={this.onChangeText}
            onChangeArea={this.onChangeArea}
            area={area}
            textValue={textValue}
            textFilter={textFilter}
          />
          {isFiltered &&
            <div
              className={`notification${filteredItems.length === 0
                ? ' is-warning'
                : ''}`}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {filteredItems.length > 0
                ? <span>
                    Search results: {filteredItems.length} customers
                  </span>
                : <span>No results!</span>}
              <button
                className="button"
                type="button"
                onClick={this.onClickReset}
                style={{ marginLeft: '1rem' }}
              >
                <span className="icon">
                  <i className="fa fa-times-circle" />
                </span>
                <span>Reset</span>
              </button>
            </div>}
          <Component users={filteredItems} />
        </form>
      )
    }
  }
}

export default filterAddressList
