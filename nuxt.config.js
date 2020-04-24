import webpack from 'webpack';

export default {
	mode: 'universal',
	/*
	 ** Headers of the page
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
	router: {
		linkActiveClass: 'active',
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
	css: [
		'~/assets/scss/styles.scss'
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{
			src: '~/plugins/bootstrap', mode: 'client'
		},
		{
			src: '~/plugins/navbar-close', mode: 'client'
		}
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'nuxt-i18n'
	],
	i18n: {
		locales: [{ code: 'es', iso: 'es-ES', file: 'es-MX.js' }, { code: 'en', iso: 'en-US', file: 'en-US.js' }],
		defaultLocale: 'es',
		fallbackLocale: 'en',
		lazy: true,
		langDir: 'lang/',
		strategy: 'prefix',
		rootRedirect: 'es/aboutme',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			fallbackLocale: 'en'
		}
	},
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 */
	build: {
		plugins: [
			new webpack.ProvidePlugin({
				// global modules
				'$': 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				Popper: ['popper.js', 'default']
			})
		],
		vendor: [
			'jquery',
			'bootstrap'
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
		fallback: '404.html',
		fallback: true
	}
};
