import React from 'react'
import Tabs from '../Tabs'
import ShipmentList from 'components/ShipmentList'

export default ({ user }) => {
  if (!user) return <div>No user!</div>
  return (
    <div>
      <Tabs
        userId={user._id}
        activeTab="shipments"
        user={user}
      />
      <ShipmentList
        shipments={user.shipments}
        count={user.shipmentCount}
      />
    </div>
  )
}
