import React from 'react'

import Buttons from './Buttons'

const Header = ({ record, title, model }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}
    >
      <h2 className="title is-4" style={{ margin: 0 }}>
        {title}
      </h2>
      <div style={{ paddingLeft: '1.5rem' }}>
        <Buttons record={record} model={model} />
      </div>
    </div>
  )
}

export default Header
