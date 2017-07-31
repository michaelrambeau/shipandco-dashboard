import { browserHistory as history } from 'react-router'

export default function goToUser(user) {
  return () => history.push(`/users/${user._id}`)
}
