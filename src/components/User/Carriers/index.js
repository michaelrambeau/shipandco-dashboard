import React from 'react'
import CarrierList from './CarrierList'
import Tabs from '../Tabs'

export default ({ user }) => {
  if (!user) return <div>No user!</div>
  return (
    <div>
      <Tabs
        user={user}
        userId={user._id}
        activeTab="carriers"
      />
      <CarrierList carriers={user.carriers} />
    </div>
  )
}
