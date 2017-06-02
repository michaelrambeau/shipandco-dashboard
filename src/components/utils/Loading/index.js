import React from 'react'

const Loading = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div>
      <div className="loader" />
    </div>
    <div style={{ color: '#999', padding: 10 }}>Loading...</div>
  </div>
)

export default Loading
