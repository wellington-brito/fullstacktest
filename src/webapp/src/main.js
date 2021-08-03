import Vue from 'vue';
import App from './App.vue';
import store from './store';
import swal from 'sweetalert2';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

Vue.filter('splitBigString', function(value) {
    if (!value) return ''
    return value.substring(0, 150);
});

new Vue({
    store,
    swal,
    render: function(h) { return h(App) }
}).$mount('#app')