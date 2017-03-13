import React, { PropTypes } from 'react'
import logo from 'components/utils/CarrierIcon/yuupack.svg'
import CarrierBox from '../CarrierBox'

const carrier = {
  name: 'Japan Post National (Yuupack)',
  logo
}

const Yuupack = ({ settings }) => {
  const { userName, password } = settings
  return (
    <CarrierBox carrier={carrier}>
      <div>{userName}</div>
      <div>{password}</div>
    </CarrierBox>
  )
}

Yuupack.propTypes = {
  settings: PropTypes.object.isRequired
}

export default Yuupack