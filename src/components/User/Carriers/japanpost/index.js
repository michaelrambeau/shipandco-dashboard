import React, { PropTypes } from 'react'
import logo from 'components/utils/CarrierIcon/japanpost.svg'
import CarrierBox from '../CarrierBox'

const carrier = {
  name: 'Japan Post International',
  logo
}

const Numbers = ({ numbers }) => {
  if (!numbers) return <div>No numbers</div>
  if (!Array.isArray(numbers)) return <div>Invalid numbers!</div>
  if (numbers.every(number => number === '')) return <div className="empty">No numbers</div>
  return <div>{numbers.join(' - ')}</div>
}

const JapanPost = ({ settings }) => {
  const numbers = settings.customerNumbers
  return (
    <CarrierBox carrier={carrier}>
      <Numbers numbers={numbers} />
    </CarrierBox>
  )
}

JapanPost.propTypes = {
  settings: PropTypes.object.isRequired
}

export default JapanPost
