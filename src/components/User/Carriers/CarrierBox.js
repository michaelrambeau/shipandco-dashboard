import React from 'react'

export default ({ carrier, children }) => (
  <div className="column is-half-tablet">
    <div className="box">
      <div className="media">
        <div className="media-left">
          <img src={carrier.logo} width="64" height="64" />
        </div>
        <div className="media-content">
          <strong>{carrier.name}</strong>
          <div>
          {children}
          </div>
        </div>
      </div>
    </div>
  </div>
)
