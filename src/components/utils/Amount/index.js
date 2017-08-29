import React from 'react'
import numeral from 'numeral'

export default ({ value, currency }) => {
  const isYen = ['JPY', 'JYE'].includes(currency)
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
