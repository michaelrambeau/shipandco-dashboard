import React from 'react'

export default ({ value, currency }) => {
  const isYen = ['JPY', 'JYE'].includes(currency)
  if (!value) return <span className="empty">-</span>
  const number = parseFloat(value)
  const symbol = isYen ? '¥' : currency
  const decimals = isYen ? 0 : 2
  const amount = number.toFixed(decimals)
  if (number === 0) return <span className="empty">-</span>
  return (
    <span>{amount} {symbol}</span>
  )
}
