import React, { PropTypes } from 'react'
import logo from 'components/utils/CarrierIcon/dhl.svg'
import CarrierBox from '../CarrierBox'

const carrier = {
  name: 'DHL',
  logo
}

const Dhl = ({ settings }) => {
  const { accountNumber } = settings
  if (!accountNumber) return <div>No DHL settings</div>
  return (
    <CarrierBox carrier={carrier}>
      <div>{accountNumber}</div>
    </CarrierBox>
  )
}

Dhl.propTypes = {
  settings: PropTypes.object.isRequired
}

export default Dhl
