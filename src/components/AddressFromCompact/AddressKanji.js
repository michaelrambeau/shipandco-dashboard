import React from 'react'

const From = ({ address }) => {
  const values = [
    address.address1_kanji,
    address.address2_kanji,
    address.province_kanji
  ]
  return (
    <div>
      {values.map(value => {
        if (!value) return <div className="empty">(empty)</div>
        return <div>{value}</div>
      })}
    </div>
  )
}

export default From
