import React from 'react'
import CarrierIcon from 'components/utils/CarrierIcon'
import Amount from 'components/utils/Amount'
import LabelArea from './LabelArea'

const methodName = data => {
  const { carrier, method } = data
  if (carrier === 'japanpost') return method.toUpperCase()
  if (carrier === 'yamato') return 'Yamato (C2)'
  return method
}

const Info = ({ data, shipment }) => {
  return (
    <div className="card is-fullwidth">
      <div className="card-content media">
        <div className="media-left">
          <CarrierIcon carrier={data.carrier} size={48} />
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              Tracking Number: {data.tracking_number || 'N/A'}
            </p>
            {data.method &&
              <div>
                {methodName(data)}
              </div>}
            {!!data.amount &&
              <div>
                <Amount value={data.amount} currency={data.currency} />
              </div>}
          </div>
        </div>
        <div className="media-right">
          {shipment && <LabelArea shipment={shipment} />}
        </div>
      </div>
    </div>
  )
}

export default Info
