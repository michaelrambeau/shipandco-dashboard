import { UserAuthWrapper } from 'redux-auth-wrapper'
import React from 'react'
import Loading from 'components/utils/Loading'

const LoadingComponent = () => {
  return (
    <section className="section">
      <Loading text={'Authenticating...'} />
    </section>
  )
}

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: (state) => state.auth.user,
  authenticatingSelector: (state) => state.auth.isLoading,
  // authenticatingSelector: (state) => false,
  LoadingComponent
})

export default UserIsAuthenticated
