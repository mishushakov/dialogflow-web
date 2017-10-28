import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app')