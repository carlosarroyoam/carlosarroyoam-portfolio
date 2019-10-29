<template>
	<nav class="navbar navbar-expand-md navbar-dark container-fluid shadow fixed-top">
		<nuxt-link :to="localePath({ name: 'aboutme' })" tag="a" class="navbar-brand mb-0 h1">
			Carlos Alberto Arroyo Martínez
		</nuxt-link>

		<button class="navbar-toggler" id="navbarToggler" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
			<svg class="menu-icon d-block" width="30" height="30" viewBox="0 0 24 24">
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
			</svg>
			<svg class="menu-close-icon d-none" width="30" height="30" viewBox="0 0 24 24">
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		</button>

		<div class="collapse navbar-collapse" id="mainNavbar">
			<ul class="navbar-nav ml-md-auto">
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

			<!-- <a class="dropdown-item" href="locale" v-on:click.prevent="setLocale('en')">EN</a>
        <a class="dropdown-item" href="locale" v-on:click.prevent="setLocale('es')">ES</a>-->
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Header',
	methods: {
		setLocale(locale) {
			this.$i18n.locale = locale;
		}
	},
	mounted() {
		// When navbar is show event is called
		$('#mainNavbar').on('show.bs.collapse', function() {
			$('.menu-icon')
				.removeClass('d-block')
				.addClass('d-none');

			$('.menu-close-icon')
				.removeClass('d-none')
				.addClass('d-block');
		});

		// When navbar is hide event is called
		$('#mainNavbar').on('hide.bs.collapse', function() {
			$('.menu-icon')
				.removeClass('d-none')
				.addClass('d-block');

			$('.menu-close-icon')
				.removeClass('d-block')
				.addClass('d-none');
		});

		// When navbar is shown, attach onClick event to ".section-content, .nav-item"
		$('#mainNavbar').on('shown.bs.collapse', function() {
			$('.navbar-brand, .nav-item, .app-content, .footer').bind('click', function() {
				if ($('#navbarToggler').is(':visible')) {
					$('#mainNavbar').collapse('hide');
				}
			});
		});

		// When navbar is hidden, remove onClick event to ".section-content, .nav-item"
		$('#mainNavbar').on('hidden.bs.collapse', function() {
			$('.navbar-brand, .nav-item, .app-content, .footer').unbind('click');
		});
	}
};
</script>

<style lang="scss" scoped>
.navbar {
	background: #37474f;
}

// Boostrapt classes ovewrited
.navbar-toggler {
	border: none;
	font-size: 1.7em;
}
.navbar-toggler:focus {
	outline: 0;
}

.nav-link {
	font-weight: 500;
}

.menu-icon,
.menu-close-icon {
	fill: var(--white);
}

.nav-item-button {
	margin: auto 0 auto 0.7em;
	padding: 0 0.6em;
	min-height: 1.9em;
	border-radius: 15px;
	text-align: center;
}

.nav-item-button--text {
	padding-top: 1px;
	min-width: 100%;
	vertical-align: middle;
}

.nav-item-button--icon {
	margin-left: 0.3em;
	padding-top: 3px;
	font-size: 1.6em;
	vertical-align: middle;
}

////
// Device = Most of Smartphones Mobiles (Portrait)
//
@media only screen and (max-width: 425px) {
	.navbar-toggler {
		font-size: 1.6em;
	}
}
</style>
