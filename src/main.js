import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import VueSimpleMarkdown from 'vue-simple-markdown'
import enStrings from '@/assets/translations/en.i18n.json'
import koStrings from '@/assets/translations/ko.i18n.json'
import jpStrings from '@/assets/translations/jp.i18n.json'
import router from './router'
import axios from 'axios'

// Better locale detection - prioritize navigator.languages
console.log('window.navigator.languages', window.navigator.languages)
console.log('window.navigator.language', window.navigator.language)

// Use the first preferred language, with fallbacks
var lang =
  (window.navigator.languages && window.navigator.languages[0]) ||
  window.navigator.language ||
  window.navigator.userLanguage ||
  'en'

var locale = 'en'

// Check language prefixes (e.g., 'ja' matches 'ja', 'ja-JP', 'ja-JP-mac', etc.)
if (lang.startsWith('ja')) locale = 'jp'
if (lang.startsWith('ko')) locale = 'ko'

// Default to 'en' for any other language
console.log('Detected language:', lang, '-> locale:', locale)
Vue.prototype.$lang = locale
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueMeta)
Vue.use(VueSimpleMarkdown)
const messages = { en: enStrings, ko: koStrings, jp: jpStrings }
const i18n = new VueI18n({
  locale: locale,
  messages,
})

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app')
