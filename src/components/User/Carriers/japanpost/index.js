import React, { PropTypes } from 'react'
import logo from 'components/utils/CarrierIcon/japanpost.svg'
import CarrierBox from '../CarrierBox'

const carrier = {
  name: 'Japan Post International',
  logo
}

const JapanPost = ({ settings }) => {
  const numbers = settings.customerNumbers
  if (!numbers) return <div>No numbers</div>
  if (!Array.isArray(numbers)) return <div>Invalid numbers!</div>
  return (
    <CarrierBox carrier={carrier}>
      {numbers.join(' - ')}
    </CarrierBox>
  )
}

JapanPost.propTypes = {
  settings: PropTypes.object.isRequired
}

export default JapanPost
