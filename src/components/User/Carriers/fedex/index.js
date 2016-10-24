import React, { PropTypes } from 'react'
import logo from 'components/utils/CarrierIcon/fedex.svg'
import CarrierBox from '../CarrierBox'

const carrier = {
  name: 'Fedex',
  logo
}

const Fedex = ({ settings }) => {
  const { accountNumber, meterNumber } = settings.live
  if (!accountNumber && !meterNumber) return <div>No Fedex settings</div>
  return (
    <CarrierBox carrier={carrier}>
      <div>{accountNumber}</div>
      <div>{meterNumber}</div>
    </CarrierBox>
  )
}

Fedex.propTypes = {
  settings: PropTypes.object.isRequired
}

export default Fedex
