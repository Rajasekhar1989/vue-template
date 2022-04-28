import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Bootstrap Integration */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

/* BootstrapVue Integration */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* For Icons */
import 'boxicons';

/* Custom Styles */
import '../src/assets/css/style.css'

/* Splitpanes */
import { Splitpanes, Pane } from 'splitpanes'
import '../node_modules/splitpanes/dist/splitpanes.css'
Vue.component('split-pane', Splitpanes);
Vue.component('pane', Pane);

/* ION Range Slider */
import rangeSlider from '../node_modules/ion-rangeslider/js/ion.rangeSlider.js'
import rangeSlidercss from '../node_modules/ion-rangeslider/css/ion.rangeSlider.css'
Vue.use(rangeSlider, rangeSlidercss);

/* Vue Toggle Button */
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);

/* DateTimePicker */
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
Vue.use(DatePicker)

/* Tree */
import LiquorTree from 'liquor-tree'
Vue.use(LiquorTree)

/* Charts */
import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
