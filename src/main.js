import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import App from './App.vue'

Vue.use(VueCarousel)

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app')