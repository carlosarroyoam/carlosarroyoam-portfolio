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
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			}
		],
		script: [
			{ src: 'https://code.jquery.com/jquery-3.3.1.min.js', crossorigin: 'anonymous', defer: true },
			{ src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', crossorigin: 'anonymous', defer: true },
			{ src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', crossorigin: 'anonymous', defer: true },
			{ type: 'text/javascript', src: '/js/app.js', defer: true }
		]
	},
	router: {
		linkActiveClass: 'active',
		extendRoutes(routes, resolve) {
			routes.push({
				path: '/',
				component: resolve(__dirname, 'pages/aboutme/index.vue')
			})
		}
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
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
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
		strategy: 'prefix_and_default',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected'
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
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) { }
	}
};
