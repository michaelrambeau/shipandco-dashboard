import React from 'react'

export default ({ carrier, children }) => (
  <div className="column is-half-tablet">
    <div className="box" style={{ height: '100%' }}>
      <div className="media">
        <div className="media-left">
          <img src={carrier.logo} width="64" height="64" />
        </div>
        <div className="media-content">
          <h4 className="title is-4">{carrier.name}</h4>
          <div>
          {children}
          </div>
        </div>
      </div>
    </div>
  </div>
)
