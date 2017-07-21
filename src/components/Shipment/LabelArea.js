import React from 'react'
import get from 'lodash.get'
import tinytime from 'tinytime'

import { getLabelUrl } from 'helpers/labels'

const template = tinytime('{YYYY}/{Mo}/{DD}', {
  padMonth: true,
  padDays: true,
})

const RemovedLabel = ({ shipment }) =>
  <div className="tag is-warning">
    {`Label removed on ${template.render(
      new Date(get(shipment, 'label.removed_at'))
    )}`}
  </div>

const ViewLabelButton = ({ shipment }) => {
  const url = getLabelUrl(shipment)
  return (
    <a className="button is-outlined is-success" href={url} target="_blank">
      <span className="icon">
        <i className="fa fa-cloud-download" />
      </span>
      <span>View Label</span>
    </a>
  )
}

const LabelArea = ({ shipment }) => {
  const shipmentState = shipment.state
  console.log('state', shipmentState)
  const status = get(shipment, 'label.status') || ''
  const method = get(shipment, 'shipment_infos.method') || ''
  if (shipmentState === 'void') return <div className="tag is-danger">VOID</div>
  if (status === 'removed') return <RemovedLabel shipment={shipment} />
  if (status === 'uploaded') return <ViewLabelButton shipment={shipment} />
  return null
}

export default LabelArea
