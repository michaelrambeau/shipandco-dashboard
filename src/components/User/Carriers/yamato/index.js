import React, { PropTypes } from 'react'
import logo from 'components/utils/CarrierIcon/yamato.svg'
import CarrierBox from '../CarrierBox'

const carrier = {
  name: 'Yamato',
  logo
}

const Yamato = ({ settings }) => {
  const { userName, password } = settings
  return (
    <CarrierBox carrier={carrier}>
      <div>{userName}</div>
      <div>{password}</div>
    </CarrierBox>
  )
}

Yamato.propTypes = {
  settings: PropTypes.object.isRequired
}

export default Yamato