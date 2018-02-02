import React from 'react'
import KPIMenu from './KPIMenu'
import GraphByMonth from './GraphByMonth'

import Loading from 'components/utils/Loading'

const KPIUsersView = ({ data, loading }) => {
  if (!data || !data.paid) return null
  return (
    <section className="section">
      <div className="container">
        <KPIMenu activeTab="customers" />
        <h2 className="title is-3">Customer Statistics</h2>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <Row data={data} />
          </div>
        )}
      </div>
    </section>
  )
}

const Row = ({ data }) => {
  return (
    <div className="columns">
      <div className="column is-half">
        <div className="box">
          <h4 className="title is-4">New customers by month</h4>
          <p className="subtitle is-6">User accounts created on Ship&Co</p>
          <GraphByMonth data={data.byMonth} />
        </div>
      </div>
      <div className="column is-half">
        <div className="box">
          <h4 className="title is-4">New paid customers by month</h4>
          <p className="subtitle is-6">User accounts created on Stripe</p>
          <GraphByMonth data={data.paid} />
        </div>
      </div>
    </div>
  )
}

export default KPIUsersView
