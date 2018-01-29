import React from 'react'
import logo from 'components/utils/CarrierIcon/sagawa.svg'
import CarrierBox from '../CarrierBox'
import tinytime from 'tinytime'

const template = tinytime('{YYYY} {MM} {DD} {H}:{mm}')

const carrier = {
  name: 'Sagawa',
  logo,
}

const Sagawa = ({ settings }) => {
  const { accountNumber, created_at, state } = settings
  return (
    <CarrierBox carrier={carrier}>
      <div>{accountNumber}</div>
      <div>{state}</div>
      <div>{template.render(new Date(created_at))}</div>
    </CarrierBox>
  )
}

export default Sagawa
