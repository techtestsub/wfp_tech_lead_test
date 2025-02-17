import { mergeObject } from '../utils'
import defaultConfig from './default'

const envConfig = {
    env: 'production',
    errors: {
      displayMessage: false,
      displayStackTrace: false
    }
  }
  
  const config = mergeObject(defaultConfig, envConfig)
  
  export default config