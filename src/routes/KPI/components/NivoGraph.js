import React from 'react'
import { Bar } from 'nivo'

const convertData = data =>
  data.map(item =>
    Object.assign({}, item, {
      countColor: 'red'
    })
  )

const Chart = ({ data }) =>
  <div>
    <Bar
      width={400}
      height={300}
      data={convertData(data)}
      keys={['count']}
      indexBy="date"
      margin={{
        top: 50,
        right: 60,
        bottom: 50,
        left: 60
      }}
      padding={0.2}
      innerPadding={0}
      minValue="auto"
      maxValue="auto"
      groupMode="stacked"
      layout="vertical"
      reverse={false}
      colors="nivo"
      colorBy="id"
      borderRadius={0}
      borderWidth={0}
      borderColor="inherit:darker(1.6)"
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 90,
        legend: 'Months',
        legendPosition: 'center',
        legendOffset: 36
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Labels',
        legendPosition: 'center',
        legendOffset: -40
      }}
      enableGridX={false}
      enableGridY={true}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="inherit:darker(1.6)"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
    />
  </div>

export default Chart
