import React from 'react'
import Graph from './VictoryGraph'
import Filters from './Filters'

const KPIPage = ({ data, onChangeFilter }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3">Statistics</h2>
        <h3 className="title is-4">Shipments by Month in 2017</h3>
        <div style={{ marginBottom: '1rem' }}>
          <Filters onChangeFilter={onChangeFilter} />
        </div>
        <div className="columns">
          <div className="column is-half">
            <div className="box">
              <h4 className="title is-4">By month</h4>
              <Graph data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KPIPage
