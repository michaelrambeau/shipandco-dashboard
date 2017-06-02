import React, { PropTypes } from 'react'
import logo from 'components/utils/CarrierIcon/fedex.svg'
import CarrierBox from '../CarrierBox'

const carrier = {
  name: 'FedEx',
  logo
}

const Fedex = ({ settings }) => {
  const { accountNumber, meterNumber } = settings.live
  if (!accountNumber && !meterNumber) return (
    <CarrierBox carrier={carrier}>No FedEx settings</CarrierBox>
  )
  return (
    <CarrierBox carrier={carrier}>
      <div className="field">
        <label className="label">Account Number</label>
        <p className="control">
          {accountNumber}
        </p>
      </div>
      <div className="field">
        <label className="label">Metric Number</label>
        <p className="control">
          {meterNumber}
        </p>
      </div>
    </CarrierBox>
  )
}

Fedex.propTypes = {
  settings: PropTypes.object.isRequired
}

export default Fedex
