import feathers from 'feathers-client'
import config from './config'

export default () => {
  const app = feathers()
  const host = config.apiBaseUrl
  app
    .configure(feathers.rest(host).fetch(window.fetch))
    .configure(feathers.hooks())
    .configure(feathers.authentication({ storage: window.localStorage }))
  return app
}
