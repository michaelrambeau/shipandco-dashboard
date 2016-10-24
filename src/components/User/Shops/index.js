import React from 'react'
import Tabs from '../Tabs'
import ShopList from 'components/ShopList'

export default ({ user }) => {
  if (!user) return <div>No user!</div>
  return (
    <div>
      <Tabs
        userId={user._id}
        activeTab="shops"
      />
      <ShopList shops={user.shops} count={user.shops.length} />
    </div>
  )
}
