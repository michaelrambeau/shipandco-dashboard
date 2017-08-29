import React from 'react'

const AddressKanji = ({ address }) => {
  const values = [
    address.address1_kanji,
    address.address2_kanji,
    address.province_kanji,
  ].filter(item => !!item)
  if (values.length === 0) return <div className="empty">(empty)</div>
  return (
    <div>
      {values.map((value, i) => {
        return (
          <div key={i}>
            {value}
          </div>
        )
      })}
    </div>
  )
}

export default AddressKanji
