import React from 'react'
import config from 'store/config'

const APP_URL = 'https://shipandco.auth0.com'
const client_id = '3w7EXmzzpZ4dkQGQuO6yhYAIRbLrQVIb'
// const client_id = 'DUuPWkiKhQexHjZbpVO7b9wKMj2f7tsq'
// const redirect_uri = `${self.location.origin}/auth0.html`
// const redirect_uri = `http://localhost:3030/login/callback?source=${location.href}`
// const auth0Client = 'eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiNi44LjAifQ'
// const url = `${APP_URL}/authorize?scope=openid&response_type=token&connection=google-oauth2&sso=true&client_id=${client_id}&redirect_uri=${redirect_uri}`

const url = `http://localhost:3030/auth/auth0?source=${location.href}`
// const url = `http://localhost:3030/login/request?source=${location.href}&api=http://localhost:3030`

export default () => (
  <section className="section">
    <div className="container">
      <h2 className="title is-4">Login</h2>
      <a className="button is-primary" href={url}>
        LOGIN with Google
      </a>
    </div>
  </section>
)
