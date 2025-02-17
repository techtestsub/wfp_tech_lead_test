import development from './development'
import production from './production'

const appEnv = process.env.APP_ENV ?? 'development'

const env = appEnv === 'local' ? 'development' : appEnv

const config = {
  development,
  production
}

export default config[env]
