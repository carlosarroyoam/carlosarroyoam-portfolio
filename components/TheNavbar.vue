<template>
	<div>
		<header class="navbar navbar-expand-md navbar-dark container-fluid bg-secondary shadow fixed-top zindex-fixed">
			<nuxt-link :to="localePath({ name: 'aboutme' })" tag="a" class="navbar-brand mb-0 h1 close-nav-onclick">
				Carlos Alberto Arroyo Martínez
			</nuxt-link>

			<button class="navbar-toggler" id="navbarToggler" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation bar">
				<svg class="menu-icon d-block" width="30" height="30" viewBox="0 0 24 24">
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
				</svg>
				<svg class="menu-close-icon d-none" width="30" height="30" viewBox="0 0 24 24">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>
			</button>

			<nav class="collapse navbar-collapse" id="mainNavbar">
				<ul class="navbar-nav ml-md-auto close-nav-onclick">
					<!-- About me -->
					<nuxt-link :to="localePath({ name: 'aboutme' })" tag="li" class="nav-item text-uppercase">
						<a class="nav-link">{{ $t('nav_links.about_me') }}</a>
					</nuxt-link>
					<!-- Portfolio -->
					<nuxt-link :to="localePath({ name: 'portfolio' })" tag="li" class="nav-item text-uppercase">
						<a class="nav-link">{{ $t('nav_links.portfolio') }}</a>
					</nuxt-link>
					<!-- Contact me -->
					<nuxt-link :to="localePath({ name: 'contactme' })" tag="li" class="nav-item text-uppercase">
						<a class="nav-link">{{ $t('nav_links.contact_me') }}</a>
					</nuxt-link>
					<!-- Blog -->
					<nuxt-link :to="localePath({ name: 'blog' })" tag="li" class="nav-item text-uppercase">
						<a class="nav-link">{{ $t('nav_links.blog') }}</a>
					</nuxt-link>
				</ul>
			</nav>
		</header>

		<div class="fixed-top w-100 h-100 navbar-overlay close-nav-onclick d-none"></div>
	</div>
</template>

<script>
export default {
	name: 'TheNavbar',
	methods: {
		setLocale(locale) {
			this.$i18n.locale = locale;
		},
	},
};
</script>
