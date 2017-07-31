import React from 'react'

const FreeShipments = ({ count }) => {
  if (count === 0) {
    return <div className="tag is-success">Trial completed!</div>
  }
  return (
    <div className={count === 10 ? 'empty' : 'tag is-info'}>
      {count} free shipments
    </div>
  )
}

export default FreeShipments
