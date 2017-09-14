import React from 'react'
import numeral from 'numeral'

const Amount = ({ value, currency = 'JPY' }) => {
  const isYen = ['JPY', 'JYE'].includes(currency.toUpperCase())
  if (!value) return <span className="empty">-</span>
  const number = parseFloat(value)
  const symbol = isYen ? '¥' : currency
  const decimals = isYen ? '' : '.00'
  const amount = numeral(number).format(`0,0${decimals}`)
  if (number === 0) return <span className="empty">-</span>
  return (
    <span>
      {amount} {symbol}
    </span>
  )
}

export default Amount
