import { mergeObject } from '../utils'
import defaultConfig from './default'

const envConfig = {
    env: 'development',
    errors: {
      displayMessage: true,
      displayStackTrace: true
    }
  }
  
  const config = mergeObject(defaultConfig, envConfig)
  
  export default config