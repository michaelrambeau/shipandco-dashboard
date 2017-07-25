import React from 'react'

import Counters from './Counters'
import Loading from 'components/utils/Loading'
import Dashboard from './Dashboard'

export const HomeView = ({
  counters,
  topUsers,
  lastShipments,
  loading,
  onRefresh,
}) => {
  return (
    <section className="section">
      <div className="container">
        {loading
          ? <Loading />
          : <Dashboard
              counters={counters}
              topUsers={topUsers}
              lastShipments={lastShipments}
              onRefresh={onRefresh}
            />}
      </div>
    </section>
  )
}

export default HomeView
