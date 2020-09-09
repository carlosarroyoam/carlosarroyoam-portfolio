import webpack from 'webpack';

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'theme-color',
        content: '#384247'
      },
      {
        name: 'X-UA-Compatible',
        content: 'ie=edge'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'carlosarroyoam, Carlos Arroyo, Carlos Alberto Arroyo Martínez, Blog Programacion Queretaro, Desarrollo Web Querétaro, Diseño Web Querétaro, Desarrollo Web Querétaro, Paginas web Querétaro, Ingeniero en Informatica Querétaro'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: []
  },
  /*
	 ** Customize the link active class
	 */
  router: {
    middleware: 'i18n',
    linkActiveClass: 'text-gray-100',
  },
  /*
	 ** Customize the progress-bar color
	 */
  loading: {
    color: '#fff'
  },
  /*
	 ** Global CSS
	 */
  tailwindcss: {
    cssPath: '~/assets/scss/styles.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: false
  },
	/*
		** Global CSS
		*/
  css: [
  ],
	/*
	** Plugins to load before mounting the App
	** https://nuxtjs.org/guide/plugins
	*/
  plugins: [
    '~/plugins/i18n.js'
  ],
	/*
		** Auto import components
		** See https://nuxtjs.org/api/configuration-components
		*/
  components: [
    {
      path: '~/components/base/',
      prefix: 'base'
    },
  ],
	/*
	 ** Nuxt.js dev-modules
	 */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
	/*
	 ** Nuxt.js modules
	 */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxt/content',
    'nuxt-i18n',
    'nuxt-purgecss',
  ],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
	/*
		** Build configuration
		** See https://nuxtjs.org/api/configuration-build/
		*/
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
      })
    ],
		/*
		 ** You can extend webpack config here
		 */
    extend(config, ctx) { },
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
    extractCSS: true,
  },
  generate: {
    routes: [],
    fallback: '404.html',
    fallback: true
  }
};
