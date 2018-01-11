import React from 'react'
import {
  VictoryChart,
  VictoryBar,
  VictoryLine,
  VictoryTooltip,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from 'victory'
import CarrierIcon from 'components/utils/CarrierIcon'

const mapping = {
  'EXPRESS WORLDWIDE': 'DHL Express WW',
  kakitome: 'Kakitome',
  epacket: 'ePacket',
  ems: 'EMS',
  yuupack: 'Yuupack',
  Saver: 'UPS Saver',
  'International Economy': 'FedEx Int. Eco.',
  'International Priority': 'FedEx Int. Priority.',
  sal: 'SAL',
  epacketlight: 'ePacket Light',
  airmail: 'Airmail',
}

function convert(data) {
  const points = data.slice(0, 10)
  const count = points.length
  return points.map((datum, i) => ({
    x: count - i,
    y: datum.count,
    carrier: datum.carrier,
    count: datum.count,
    method: datum.method,
    label: mapping[datum.method] || datum.method,
  }))
}

const Graph = ({ data }) => (
  <div>
    <VictoryChart
      theme={VictoryTheme.material}
      padding={{ top: 32, bottom: 32, left: 0, right: 128 }}
    >
      <VictoryAxis />
      <VictoryAxis
        domain={[0, data.length - 1]}
        dependentAxis
        style={{
          ticks: { strokeWidth: 0 },
        }}
        tickValues={[]}
        tickFormat={datum => ''}
      />
      <VictoryBar
        data={data}
        labelComponent={<VictoryLabel />}
        horizontal={true}
        label={datum => `${datum.label} (${datum.x})`}
        style={{
          data: { fill: '#F47560' },
        }}
      />
    </VictoryChart>
  </div>
)

const ContentBlock = ({ data }) => {
  const convertedData = convert(data)
  return (
    <div>
      <Graph data={convertedData} />
      <hr />
      <Table data={convertedData} />
    </div>
  )
}

const Table = ({ data }) => {
  return (
    <table className="table is-striped">
      <thead>
        <tr>
          <td>#</td>
          <td>Carrier</td>
          <td>Service</td>
          <td>Count</td>
        </tr>
      </thead>
      <tbody>
        {data.map((datum, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>
              <CarrierIcon carrier={datum.carrier} />
            </td>
            <td>{datum.label}</td>
            <td>{datum.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ContentBlock
