import { UserAuthWrapper } from 'redux-auth-wrapper'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: (state) => state.auth.user
})

export default UserIsAuthenticated
