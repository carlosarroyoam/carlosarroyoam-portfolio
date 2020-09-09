import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    defaultLocale: 'es',
    fallbackLocale: 'en',
    lazy: true,
    strategy: 'prefix',
    useCookie: true,
    cookieKey: 'i18n_redirected',
    detectBrowserLanguage: {
      fallbackLocale: 'en'
    },
    messages: {
      en: require('~/lang/en-US.json'),
      es: require('~/lang/es-MX.json')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
