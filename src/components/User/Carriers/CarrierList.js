import React from 'react'
import JapanPost from './japanpost'
import Fedex from './fedex'
import Dhl from './dhl'
import Ups from './ups'
import Yamato from './yamato'
import Yuupack from './yuupack'

export default ({ carriers }) => {
  if (Object.values(carriers).filter(item => !!item).length === 0) {
    return (
      <div className="box">
        <h4 className="title is-4">Carriers</h4>
        <div>No carrier</div>
      </div>
    )
  }
  return (
    <div className="columns is-multiline">
      {carriers.japanpost &&
        carriers.japanpost.customerNumbers &&
        <JapanPost settings={carriers.japanpost} />}
      {carriers.yuupack && <Yuupack settings={carriers.yuupack} />}
      {carriers.dhl && <Dhl settings={carriers.dhl} />}
      {carriers.fedex && <Fedex settings={carriers.fedex} />}
      {carriers.ups && <Ups settings={carriers.ups} />}
      {carriers.yamato && <Yamato settings={carriers.yamato} />}
    </div>
  )
}
