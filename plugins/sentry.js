import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven
  .config('https://920df9cbd56a4eaca855de0e4ab69536@sentry.coinex.com/2')
  .addPlugin(RavenVue, Vue)
  .install()
