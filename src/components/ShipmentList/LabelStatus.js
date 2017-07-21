import React from 'react'
import get from 'lodash.get'

import './styles.scss'

const JapanPostAirmail = () =>
  <span className="japanpost-label japanpost-airmail">AIR</span>
const JapanPostSAL = () =>
  <span className="japanpost-label japanpost-sal">SAL</span>

const labels = {
  sal: JapanPostSAL,
  airmail: JapanPostAirmail,
}

const LabelStatus = ({ shipment, options }) => {
  const shipmentState = shipment.state
  const status = get(shipment, 'label.status') || ''
  const method = get(shipment, 'shipment_infos.method') || ''
  if (shipmentState === 'void') return <div className="tag is-danger">VOID</div>
  if (status === 'removed')
    return <i className="fa fa-trash-o light-text" aria-hidden="true" />
  if (status === 'error')
    return <i className="fa fa-database error-icon" aria-hidden="true" />
  if (status === 'no-label') {
    const Label =
      labels[method] ||
      (() =>
        <div>
          {method}
        </div>)
    return <Label />
  }

  if (status === 'uploaded')
    return (
      <span>
        <i className="fa fa-cloud-download success-icon" aria-hidden="true" />
      </span>
    )
  return <i className="fa fa-database success-icon" aria-hidden="true" />
}

export default LabelStatus
