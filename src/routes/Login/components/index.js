import React from 'react'
import config from 'store/config'

const url = `${config.apiBaseUrl}/auth/auth0?origin=${location.origin}`

export default () => (
  <section className="section">
    <div className="container" style={{ maxWidth: 600 }}>
      <div className="card is-fullwidth">
        <div className="card-content">
          <h2 className="title is-4">Login</h2>
          <p>Please login using your <b>bentoandco.com</b> Google account.</p>
          <br />
          <div style={{ textAlign: 'center' }}>
            <a className="button is-primary is-large" href={url} styleXX={{ display: 'block' }}>
              <span className="icon">
                <i className="fa fa-google is-large" />
              </span>
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)
