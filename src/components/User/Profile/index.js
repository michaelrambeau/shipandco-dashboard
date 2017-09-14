import React from 'react'
import get from 'lodash.get'

import Tabs from '../Tabs'
import ProfileView from './UserProfile'
import GoodCategories from './GoodCategories'
import OnBoarding from './OnBoarding'
import CarrierList from '../Carriers/CarrierList'
import WarehouseList from 'components/WarehouseList'

function isJapanPostCustomer(japanpostSettings) {
  const numbers = japanpostSettings.customerNumbers
  if (!numbers) return false
  if (!Array.isArray(numbers)) return false
  return numbers.filter(x => !!x).length > 0
}

export default ({ user }) => {
  const onBoardingFlags = get(user, 'flags.onBoarding') || []
  const warehouses = user.warehouses || []
  const defaultWarehouseId = get(user, 'settings.defaultWarehouse')
  const goodCategories = get(user, 'settings.goodsCategories') || []
  return (
    <div>
      <Tabs user={user} userId={user._id} activeTab="profile" />
      <div className="columns">
        <div className="column is-half-tablet">
          <ProfileView user={user} profile={user.profile} />
        </div>
        <div className="column is-half-tablet">
          <OnBoarding onBoardingFlags={onBoardingFlags} />
        </div>
      </div>
      {Object.keys(user.carriers).length > 0 &&
        <CarrierList carriers={user.carriers} />}
      <div className="box">
        <h4 className="title is-4">Warehouses</h4>
        <WarehouseList
          warehouses={warehouses}
          count={warehouses.length}
          defaultWarehouseId={defaultWarehouseId}
        />
      </div>
      <div className="columns">
        <div className="column is-half-tablet">
          <GoodCategories categories={goodCategories} />
        </div>
        <div className="column is-half-tablet" />
      </div>
    </div>
  )
}
