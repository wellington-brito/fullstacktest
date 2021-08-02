import Vue from 'vue'
import App from './App.vue'
import store from './store'
import swal from 'sweetalert2';

Vue.config.productionTip = false

new Vue({
    store,
    swal,
    render: function(h) { return h(App) }
}).$mount('#app')