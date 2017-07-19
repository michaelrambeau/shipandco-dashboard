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
        <h3 className="title is-3">Welcome to SHIP&CO Staff Dashboard!</h3>
        <p className="subtitle is-5">
          A complete overview of SHIP&CO application.
        </p>
        <hr />
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
