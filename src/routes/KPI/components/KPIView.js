import React from 'react'
import Graph from './VictoryGraph'
import Filters from './Filters'

import Loading from 'components/utils/Loading'
import CarrierIcon from 'components/utils/CarrierIcon'

const getBestResults = data => {
  return data
    .slice()
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
}

const KPIPage = ({ data, loading, carrier, onChangeFilter }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3">Statistics</h2>
        {false && <h3 className="title is-4">Shipments by Month in 2017</h3>}
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Filters onChangeFilter={onChangeFilter} carrier={carrier} />
            </div>
            <div className="columns">
              <div className="column is-half">
                <div className="box">
                  <h4 className="title is-4">
                    By month{' '}
                    {carrier !== '*' && <CarrierIcon carrier={carrier} />}
                  </h4>
                  {true && <Graph data={data} />}
                  <BestMonths data={data} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

const BestMonths = ({ data }) => {
  const bestMonths = getBestResults(data)
  return (
    <div>
      <p>Best 3 months:</p>
      <ol style={{ paddingLeft: 20 }}>
        {bestMonths.map((item, i) => (
          <li key={i}>
            {item.date}: {item.count} shipments
          </li>
        ))}
      </ol>
    </div>
  )
}

export default KPIPage
