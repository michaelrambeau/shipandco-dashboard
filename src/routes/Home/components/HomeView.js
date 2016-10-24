import React from 'react'
import Counters from './Counters'

export const HomeView = ({ counters }) => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="title is-3">Welcome to ship&co dashboard!</h3>
        <p className="subtitle is-5">Everything you need to know about customer activity.</p>
        <hr />
        <Counters counters={counters} />
        <hr />
        <div className="columns" style={{ width: '100%' }}>
          <div className="column is-half">
            <h4 className="title is-4">Today's shipments</h4>
            <p>Coming soon</p>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">Today's errors</h4>
            <p>Coming soon</p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  )
}

export default HomeView
