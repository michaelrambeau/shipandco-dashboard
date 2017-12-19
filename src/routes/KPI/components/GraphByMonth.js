import React from 'react'
import {
  VictoryChart,
  VictoryBar,
  VictoryLine,
  VictoryTooltip,
  VictoryTheme,
  VictoryAxis,
} from 'victory'

const times = require('lodash.times')
const get = require('lodash.get')
const keys = times(12).map(i => `2017/${i + 1}`)

const formatMonth = d => {
  const m = d.getMonth() + 1
  return m < 10 ? `0${m}` : m
}

function convert(data) {
  const findDatum = key => data.find(datum => datum.date === key)
  return keys.map((key, i) => {
    const datum = findDatum(key)
    const count = datum ? datum.count : 0
    const date = new Date(2017, i, 1)
    return {
      x: date,
      y: count,
      label: `${date.toISOString().slice(0, 7)}: ${count} shipments`,
    }
  })
}

const Graph = ({ data }) => (
  <div>
    <VictoryChart
      scale={{ x: 'time' }}
      theme={VictoryTheme.material}
      padding={{ top: 0, bottom: 32, left: 50, right: 32 }}
    >
      <VictoryAxis tickFormat={formatMonth} tickCount={12} />
      <VictoryAxis dependentAxis />
      <VictoryBar
        data={convert(data)}
        labelComponent={<VictoryTooltip />}
        style={{
          data: { fill: '#F47560' },
        }}
      />
    </VictoryChart>
  </div>
)

export default Graph
