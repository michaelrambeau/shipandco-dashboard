import React from 'react'
import debounce from 'lodash.debounce'

import filterUser from './filter'
import SearchModule from './SearchModule'

// Higher order component to add a filter text field above the User list
const filterList = Component => {
  return class List extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        textValue: '',
        textFilter: '',
        status: '*',
        shop: '*',
        carrier: '*'
      }
      this.onChangeText = this.onChangeText.bind(this)
      this.onChangeStatus = this.onChangeStatus.bind(this)
      this.onChangeShop = this.onChangeShop.bind(this)
      this.onChangeCarrier = this.onChangeCarrier.bind(this)
      this.onClickReset = this.onClickReset.bind(this)
      this.emitChangeDelayed = debounce(this.emitChange, 300)
    }
    emitChange(textFilter) {
      this.setState({
        textFilter
      })
    }
    onChangeStatus(e) {
      const comboBox = e.target
      const status = comboBox.options[comboBox.selectedIndex].value
      this.setState({
        status
      })
    }
    onChangeCarrier(e) {
      const comboBox = e.target
      const carrier = comboBox.options[comboBox.selectedIndex].value
      this.setState({
        carrier
      })
    }
    onChangeShop(e) {
      const comboBox = e.target
      const shop = comboBox.options[comboBox.selectedIndex].value
      this.setState({
        shop
      })
    }
    onChangeText(e) {
      const textValue = e.target.value
      this.setState({
        textValue
      })
      this.emitChangeDelayed(textValue)
    }
    onClickReset(e) {
      const textValue = ''
      const textFilter = ''
      const status = '*'
      const shop = '*'
      const carrier = '*'
      this.setState({
        status,
        textValue,
        textFilter,
        shop,
        carrier
      })
    }
    render() {
      const { users } = this.props
      const { textValue, textFilter, status, shop, carrier } = this.state
      const isFiltered =
        textFilter || status !== '*' || shop !== '*' || carrier !== '*'
      const filteredItems = isFiltered
        ? users.filter(filterUser({ textFilter, status, shop, carrier }))
        : users
      return (
        <form>
          <SearchModule
            onChangeText={this.onChangeText}
            onChangeStatus={this.onChangeStatus}
            onChangeShop={this.onChangeShop}
            onChangeCarrier={this.onChangeCarrier}
            carrier={carrier}
            textValue={textValue}
            textFilter={textFilter}
            status={status}
            shop={shop}
          />
          {isFiltered &&
            <div
              className={`notification${filteredItems.length === 0
                ? ' is-warning'
                : ''}`}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {filteredItems.length > 0
                ? <span>Filter results: {filteredItems.length} customers</span>
                : <span>No results!</span>}
              <button
                className="button"
                type="button"
                onClick={this.onClickReset}
                style={{ marginLeft: '1rem' }}
              >
                Reset
              </button>
            </div>}
          <Component users={filteredItems} />
        </form>
      )
    }
  }
}

export default filterList
