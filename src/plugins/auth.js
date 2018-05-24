import Amplify, { Auth } from 'aws-amplify'
import awsExports from '../aws-exports'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Amplify.configure(awsExports)
  Vue.prototype.$auth = Auth
}
