import React from 'react'
import CarrierIcon from 'components/utils/CarrierIcon'

const Info = ({ data }) => (
  <div className="card is-fullwidth">
    <div className="card-content media">
      <div className="media-left">
        <CarrierIcon carrier={data.carrier} size={64} />
      </div>
      <div className="media-content">
        <p>{data.tracking_number}</p>
        <div>{data.service} {data.method}</div>
        <div>{data.amount} {data.currency}</div>
      </div>
    </div>
  </div>
)

export default Info
