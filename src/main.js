// Polyfill to support custom elements in IE9 or whatever
import 'document-register-element/build/document-register-element'

import Vue from 'vue'
import Widget from './Widget.vue'
import WidgetPortrait from  './WidgetPortrait.vue'

import VueCustomElement from 'vue-custom-element'
import browserDetect from 'vue-browser-detect-plugin'
import axios from 'axios'

import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'

Vue.prototype.$http = axios
Vue.config.ignoredElements = [/^ccw-/]

Vue.use(browserDetect)
Vue.use(VueCustomElement)
Vue.use(vuetify)
Vue.customElement('climate-clock', Widget)
Vue.customElement('climate-clock-portrait', WidgetPortrait)

new Vue({
    vuetify,
    router,
    render: h => h(WidgetPortrait)
  }).$mount('#app')