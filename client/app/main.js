import Vue from 'nativescript-vue'
import Register from './components/Register'





// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({

  render: h => h('frame', [h(Register)])
}).$start()
