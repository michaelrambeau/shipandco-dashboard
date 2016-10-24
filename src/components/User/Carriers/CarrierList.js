import React from 'react'
import JapanPost from './japanpost'
import Fedex from './fedex'
import Dhl from './dhl'
import Ups from './ups'

export default ({ carriers }) => (
  <div className="columns is-multiline">
    {carriers.japanpost && carriers.japanpost.customerNumbers && (
      <JapanPost settings={carriers.japanpost} />
    )}
    {carriers.dhl && (
      <Dhl settings={carriers.dhl} />
    )}
    {carriers.fedex && (
      <Fedex settings={carriers.fedex} />
    )}
    {carriers.ups && (
      <Ups settings={carriers.ups} />
    )}
  </div>
)
