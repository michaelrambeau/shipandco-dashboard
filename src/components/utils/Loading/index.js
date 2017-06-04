import React from 'react'

const defaultProps = {
  text: 'Loading...'
}

const Loading = ({ text = 'Loading...' }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div>
      <div className="loader" />
    </div>
    <div style={{ color: '#999', padding: 10 }}>{text}</div>
  </div>
)

export default Loading
