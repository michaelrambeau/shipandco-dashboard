import React from 'react'
import {
  VictoryChart,
  VictoryBar,
  VictoryLine,
  VictoryTooltip,
  VictoryTheme,
  VictoryAxis,
} from 'victory'
import tinytime from 'tinytime'

const template = tinytime('{Mo}/{DD} {dddd}', {
  padMonth: true,
  padDays: true,
})

function formatDay(date) {
  return template.render(date)
}

const colorsByDay = [
  '#97E3D5',
  '#f43d2e',
  '#F47560',
  '#E8C1A0',
  '#F1E15B',
  '#E8A838',
  '#61CDBB',
]

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

// Put Monday first and Sunday last
const reorderWeek = ([sun, ...days]) => [...days, sun]

const Palette = () => (
  <div style={{ display: 'flex' }}>
    {reorderWeek(colorsByDay).map((color, i) => (
      <div
        key={i}
        style={{
          backgroundColor: color,
          padding: '2px',
          flex: 1,
          textAlign: 'center',
        }}
      >
        {reorderWeek(days)[i]}
      </div>
    ))}
  </div>
)

function convert(data) {
  return data
    .map(datum => ({
      date: new Date(datum.year, datum.month - 1, datum.day),
      count: datum.count,
    }))
    .map(datum => ({
      x: datum.date,
      y: datum.count,
      label: `${formatDay(datum.date)} ${datum.count} shipments`,
    }))
}

const Graph = ({ data }) => {
  const convertedData = convert(data)
  return (
    <div>
      <VictoryChart
        scale={{ x: 'time' }}
        theme={VictoryTheme.material}
        padding={{ top: 0, bottom: 32, left: 50, right: 32 }}
      >
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryBar
          data={convertedData}
          labelComponent={<VictoryTooltip />}
          style={{
            data: { fill: datum => colorsByDay[datum.x.getDay()] },
          }}
        />
      </VictoryChart>
      <Palette />
    </div>
  )
}

export default Graph
