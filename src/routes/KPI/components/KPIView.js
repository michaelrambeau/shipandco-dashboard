import React from 'react'
import tinytime from 'tinytime'

import GraphByMonth from './GraphByMonth'
import GraphByDay from './GraphByDay'
import Filters from './Filters'

import Loading from 'components/utils/Loading'
import CarrierIcon from 'components/utils/CarrierIcon'
import ShopIcon from 'components/utils/ShopIcon'

const getBestResults = data => {
  return data
    .slice()
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
}

const KPIPage = ({ data, loading, query, onChangeFilter }) => {
  const { carrier, shop } = query
  console.log('Data', data)

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3">Shipment Statistics</h2>
        {false && <h3 className="title is-4">Shipments by Month in 2017</h3>}
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Filters onChangeFilter={onChangeFilter} query={query} />
            </div>
            <div className="columns">
              <div className="column is-half">
                <div className="box">
                  <h4 className="title is-4">
                    Last 12 months{' '}
                    {carrier !== '*' && <CarrierIcon carrier={carrier} />}
                    {shop !== '*' && <ShopIcon type={shop} />}
                  </h4>
                  {data.byMonth.length > 0 ? (
                    <div>
                      <GraphByMonth data={data.byMonth} />
                      <hr />
                      <BestMonths data={data.byMonth} />
                    </div>
                  ) : (
                    <div>No data, try other filters!</div>
                  )}
                </div>
              </div>
              <div className="column is-half">
                <div className="box">
                  <h4 className="title is-4">
                    Last 30 days{' '}
                    {carrier !== '*' && <CarrierIcon carrier={carrier} />}
                    {shop !== '*' && <ShopIcon type={shop} />}
                  </h4>
                  {data.byDay.length > 0 ? (
                    <div>
                      <GraphByDay data={data.byDay} />
                      <hr />
                      <BestDays data={data.byDay} />
                    </div>
                  ) : (
                    <div>No data, try other filters!</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

const average = data =>
  data.reduce((acc, val) => acc + val.count, 0) / data.length

const BestMonths = ({ data }) => {
  const bestMonths = getBestResults(data)
  const avg = average(data)
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
      <hr />
      <p>Average: {avg.toFixed()} shipments by month</p>
    </div>
  )
}

const template = tinytime('{MM} {DD} ({dddd})', {
  padMonth: true,
  padDays: true,
})

const formatDay = item => {
  const date = new Date(item.year, item.month - 1, item.day)
  return template.render(date)
}
const isBusinessDay = dayInWeek => dayInWeek > 0 && dayInWeek < 6
const BestDays = ({ data }) => {
  const bestDays = getBestResults(data)
  const avg = average(
    data
      .map(item => ({
        dayInWeek: new Date(item.year, item.month - 1, item.day).getDay(),
        count: item.count,
      }))
      .filter(item => isBusinessDay(item.dayInWeek))
  )
  return (
    <div>
      <p>Best 3 days:</p>
      <ol style={{ paddingLeft: 20 }}>
        {bestDays.map((item, i) => (
          <li key={i}>
            {formatDay(item)}: {item.count} shipments
          </li>
        ))}
      </ol>
      <hr />
      <p>
        Average: {avg.toFixed()} shipments by <b>business</b> day
      </p>
    </div>
  )
}

export default KPIPage
