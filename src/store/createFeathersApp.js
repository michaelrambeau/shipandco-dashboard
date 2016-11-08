import feathers from 'feathers-client'

export default () => {
  const app = feathers()
  const host = 'http://localhost:3030'
  app
    .configure(feathers.rest(host).fetch(window.fetch))
    .configure(feathers.hooks())
    .configure(feathers.authentication({ storage: window.localStorage }))
  return app
}
