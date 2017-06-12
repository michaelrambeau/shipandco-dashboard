import React from 'react'
import TimeAgo from 'timeago-react'

const Time = ({ datetime }) => {
  if (!datetime) return null
  return (
    <TimeAgo datetime={new Date(datetime)} />
  )
}

export default Time
