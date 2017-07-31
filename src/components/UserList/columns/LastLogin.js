import React from 'react'

import TimeAgo from 'components/utils/TimeAgo'

const LastLogin = ({ user }) =>
  user.lastLogin
    ? <div>
        Last login:<br />
        <TimeAgo datetime={user.lastLogin} />
      </div>
    : <span className="empty">No login</span>

export default LastLogin
