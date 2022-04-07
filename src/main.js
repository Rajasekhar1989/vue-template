import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Bootstrap Integration */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'boxicons';

/* Custom Styles */
import '../src/assets/css/style.css'

/* Splitpanes */
import { Splitpanes, Pane } from 'splitpanes'
import '../node_modules/splitpanes/dist/splitpanes.css'
Vue.component('split-pane', Splitpanes);
Vue.component('pane', Pane);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
