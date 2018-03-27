import App from './App.vue'
import Config from '../config'
import Translations from './translations'
import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import VueI18n from 'vue-i18n'

Vue.use(VueCarousel)

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: Config.lang.display, // set default locale
    messages: Translations // define translations
})

new Vue({
    i18n,
    el: '#app',
    render: h => h(App)
}).$mount('#app')