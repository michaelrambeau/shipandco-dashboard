import React from 'react'
import get from 'lodash.get'
import tinytime from 'tinytime'

import CarrierIcon from 'components/utils/CarrierIcon'
import Amount from 'components/utils/Amount'
import TimeAgo from 'components/utils/TimeAgo'
import LabelArea from './LabelArea'

const methodName = data => {
  const { carrier, method } = data
  if (carrier === 'japanpost') return method.toUpperCase()
  if (carrier === 'yamato') return 'Yamato (C2)'
  return method
}

const templates = {
  full: tinytime('{YYYY}/{Mo}/{DD} {H}:{mm}', {
    padMonth: true,
    padDays: true,
  }),
}

const Info = ({ data, shipment }) => {
  const { meta, date } = shipment
  return (
    <div className="card is-fullwidth">
      <div className="card-content media">
        <div className="media-left">
          <CarrierIcon carrier={data.carrier} size={48} />
        </div>
        <div className="media-content">
          <div className="content">
            <div>
              Created at {templates.full.render(new Date(date))} (<TimeAgo datetime={date} />)
            </div>
            <div>
              Tracking Number: {data.tracking_number || 'N/A'}
            </div>
            {data.method &&
              <div>
                {methodName(data)}
              </div>}
            {!!data.amount &&
              <div>
                <Amount value={data.amount} currency={data.currency} />
              </div>}
            {meta && <Billing meta={meta} />}
          </div>
        </div>
        <div className="media-right">
          {shipment && <LabelArea shipment={shipment} />}
        </div>
      </div>
    </div>
  )
}

const Invoiced = ({ invoiced_at }) =>
  <div>
    <span className="fa fa-check-square light-text" /> Invoiced at{' '}
    {templates.full.render(new Date(invoiced_at))} (<TimeAgo datetime={invoiced_at} />)
  </div>

const NotInvoicedYet = ({ invoiced_at }) =>
  <div className="empty">Not invoiced yet</div>

const Free = ({}) =>
  <div>
    <span className="fa fa-gift light-text" /> This is a FREE label!
  </div>

const Billing = ({ meta }) => {
  const { free, invoiced_at } = meta
  if (free) return <Free />
  return invoiced_at
    ? <Invoiced invoiced_at={invoiced_at} />
    : <NotInvoicedYet />
}

export default Info
