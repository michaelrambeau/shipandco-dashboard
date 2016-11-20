import React from 'react'

export default ({ value, currency }) => {
  if (!value) return <span className="empty">-</span>
  const number = parseFloat(value)
  const symbol = currency === 'JPY' ? '¥' : currency
  const decimals = currency === 'JPY' ? 0 : 2
  const amount = number.toFixed(decimals)
  if (number === 0) return <span className="empty">-</span>
  return (
    <span>{amount} {symbol}</span>
  )
}
