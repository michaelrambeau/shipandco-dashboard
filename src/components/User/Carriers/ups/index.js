import React, { PropTypes } from 'react'
import logo from 'components/utils/CarrierIcon/ups.svg'
import CarrierBox from '../CarrierBox'

const carrier = {
  name: 'UPS',
  logo
}

const Ups = ({ settings }) => {
  const { accountNumber, password, userName, accessKey } = settings
  // if (!accountNumber && !meterNumber) return <div>No Fedex settings</div>
  return (
    <CarrierBox carrier={carrier}>
      <div>{accountNumber}</div>
      <div>{userName}</div>
      <div>{password}</div>
      <div>{accessKey}</div>
    </CarrierBox>
  )
}

Ups.propTypes = {
  settings: PropTypes.object.isRequired
}

export default Ups
