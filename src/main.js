// Polyfill to support custom elements in IE9 or whatever
import 'document-register-element/build/document-register-element'

import Vue from 'vue'
import Widget from './Widget.vue'

import VueCustomElement from 'vue-custom-element'
import axios from 'axios'
import countdown from 'countdown'

Vue.prototype.$http = axios
Vue.prototype.countdown = countdown
Vue.use(VueCustomElement)
Vue.customElement('climate-clock', Widget)
