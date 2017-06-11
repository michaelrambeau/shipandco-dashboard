import React from 'react'
import WarehouseList from 'components/WarehouseList'
import Tabs from '../Tabs'

export default ({ user }) => {
  if (!user) return <div>No user!</div>
  console.log('User=', user);
  const warehouses = user.warehouses
  const defaultWarehouseId = user.settings.defaultWarehouse
  return (
    <div>
      <Tabs
        user={user}
        userId={user._id}
        activeTab="warehouses"
      />
      <WarehouseList
        warehouses={warehouses}
        count={warehouses.length}
        defaultWarehouseId={defaultWarehouseId}
      />
    </div>
  )
}
