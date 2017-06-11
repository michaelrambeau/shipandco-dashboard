import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import './style.scss'

const Page = React.createClass({
  displayName: 'Page',
  propTypes: {
    children: React.PropTypes.node,
    label: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    page: React.PropTypes.number,
    selected: React.PropTypes.bool,
    url:  React.PropTypes.string.isRequired,
    query: React.PropTypes.object
  },
  onSelect () {
    this.props.onSelect(this.props.page)
  },
  render () {
    const { children, selected, url, page, query } = this.props
    const className = classNames('pagination-link', {
      'is-current': selected
    })
    const urlParams = { ...query, page }
    const queryString = Object.keys(urlParams)
      .map(key => `${key}=${urlParams[key]}`)
      .join(`&`)
    const fullUrl = `${url}?${queryString}`
    return (
      <li>
        <Link className={className} to={fullUrl}>
          {children}
        </Link>
      </li>
    )
  }
})

const Pagination = React.createClass({
  displayName: 'Pagination',
  propTypes: {
    className: React.PropTypes.string,
    currentPage: React.PropTypes.number.isRequired,
    limit: React.PropTypes.number,
    onPageSelect: React.PropTypes.func,
    pageSize: React.PropTypes.number.isRequired,
    plural: React.PropTypes.string,
    singular: React.PropTypes.string,
    style: React.PropTypes.object,
    total: React.PropTypes.number.isRequired,
    url: React.PropTypes.string.isRequired
  },
  renderCount () {
    let count = ''
    let { currentPage, pageSize, plural, singular, total } = this.props
    if (total <= pageSize) return null
    if (!total) {
      count = 'No ' + (plural || 'records')
    } else if (total > pageSize) {
      let start = (pageSize * (currentPage - 1)) + 1
      let end = Math.min(start + pageSize - 1, total)
      count = `Showing ${start} to ${end} of ${total}`
    } else {
      count = 'Showing ' + total
      if (total > 1 && plural) {
        count += ' ' + plural
      } else if (total === 1 && singular) {
        count += ' ' + singular
      }
    }
    return (
      <div className="Pagination__count">{count}</div>
    )
  },
  onPageSelect (page) {
    if (this.props.onPageSelect) {
      this.props.onPageSelect(page)
    }
  },
  renderPages () {
    if (this.props.total <= this.props.pageSize) return null

    let pages = []
    let { currentPage, pageSize, total, limit } = this.props
    let totalPages = Math.ceil(total / pageSize)
    let minPage = 1
    let maxPage = totalPages

    if (limit && (limit < totalPages)) {
      let rightLimit = Math.floor(limit / 2)
      let leftLimit = rightLimit + (limit % 2) - 1
      minPage = currentPage - leftLimit
      maxPage = currentPage + rightLimit

      if (minPage < 1) {
        maxPage = limit
        minPage = 1
      }
      if (maxPage > totalPages) {
        minPage = totalPages - limit + 1
        maxPage = totalPages
      }
    }
    if (minPage > 1) {
      pages.push(
        <Page
          key="page_start"
          onSelect={this.onPageSelect}
          page={1}
          url={this.props.url}
          query={this.props.query}
        >
          ...
        </Page>
      )
    }
    for (let page = minPage; page <= maxPage; page++) {
      let selected = (page === currentPage)
      /* eslint-disable no-loop-func */
      pages.push(
        <Page
          key={'page_' + page}
          selected={selected}
          onSelect={this.onPageSelect}
          page={page}
          url={this.props.url}
          query={this.props.query}
        >
          {page}
        </Page>
      )
      /* eslint-enable */
    }
    if (maxPage < totalPages) {
      pages.push(
        <Page
          key="page_end"
          onSelect={this.onPageSelect}
          page={totalPages}
          url={this.props.url}
        >
          ...
        </Page>
      )
    }
    return ( // override bulma marginTop (small screens)
      <ul className="pagination-list" style={{ marginTop: 0 }}>
        {pages}
      </ul>
		)
  },
  render () {
    const className = classNames('pagination', this.props.className)
    return (
      <div className={className} style={this.props.style}>
        {this.renderCount()}
        {this.renderPages()}
      </div>
		)
  }
})

export default Pagination
