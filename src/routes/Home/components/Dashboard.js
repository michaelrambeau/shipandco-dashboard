import React from 'react'

import Counters from './Counters'
import TopUsers from './TopUsers'
import LastShipments from './LastShipments'

const Dashboard = ({ counters, topUsers, lastShipments, onRefresh }) =>
  <div>
    <Counters counters={counters} />
    <hr />
    <div className="columns">
      <div className="column">
        {topUsers.length > 0 && <TopUsers users={topUsers} />}
      </div>
      <div className="column is-half">
        {lastShipments &&
          <LastShipments shipments={lastShipments} onRefresh={onRefresh} />}
      </div>
    </div>
  </div>

export default Dashboard
