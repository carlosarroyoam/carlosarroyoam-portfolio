<template>
	<div>
		<header class="fixed inset-x-0 top-0 z-40 text-gray-100 shadow bg-header">
			<div class="container flex flex-col px-4 py-2 lg:justify-between lg:items-center lg:py-4 lg:flex-row">
				<div class="flex flex-row items-center justify-between">
					<nuxt-link :to="localePath({ name: 'aboutme' })" tag="a" class="text-sm uppercase sm:text-base lg:text-lg"> Carlos Alberto Arroyo Martínez </nuxt-link>

					<button class="text-gray-100 lg:hidden" type="button" aria-label="Toggle navigation bar" v-on:click="toggleNavbar()">
						<svg class="block w-8 fill-current md:w-10" v-bind:class="{ hidden: isOpen }" viewBox="0 0 24 24">
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
						</svg>
						<svg class="block w-8 fill-current md:w-10" v-bind:class="{ hidden: !isOpen }" viewBox="0 0 24 24">
							<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
							<path d="M0 0h24v24H0z" fill="none" />
						</svg>
					</button>
				</div>

				<nav class="text-xs font-semibold text-gray-500 uppercase lg:block sm:text-sm" id="mainNavbar" v-bind:class="{ hidden: !isOpen }">
					<ul class="flex flex-col py-4 lg:py-0 lg:flex-row">
						<!-- About me -->
						<nuxt-link :to="localePath({ name: 'aboutme' })" tag="li" class="lg:ml-6">
							<a class="block hover:text-gray-100">{{ $t('nav_links.about_me') }}</a>
						</nuxt-link>
						<!-- Portfolio -->
						<nuxt-link :to="localePath({ name: 'portfolio' })" tag="li" class="mt-4 lg:mt-0 lg:ml-6">
							<a class="block hover:text-gray-100">{{ $t('nav_links.portfolio') }}</a>
						</nuxt-link>
						<!-- Contact me -->
						<nuxt-link :to="localePath({ name: 'contactme' })" tag="li" class="mt-4 lg:mt-0 lg:ml-6">
							<a class="block hover:text-gray-100">{{ $t('nav_links.contact_me') }}</a>
						</nuxt-link>
						<!-- Blog -->
						<nuxt-link :to="localePath({ name: 'blog' })" tag="li" class="mt-4 lg:mt-0 lg:ml-6">
							<a class="block hover:text-gray-100">{{ $t('nav_links.blog') }}</a>
						</nuxt-link>
					</ul>
				</nav>
			</div>
		</header>

		<div class="fixed inset-0 z-30 w-screen h-screen" v-bind:class="{ hidden: !isOpen }" v-on:click="toggleNavbar()"></div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	name: 'TheHeader',
	methods: {
		toggleNavbar: function () {
			this.$store.commit('navbar/toggle');
			console.log(this.isOpen);
		},
		setLocale: function (locale) {
			this.$i18n.locale = locale;
		},
		...mapMutations({ toggle: 'navbar/toggle' }),
	},
	computed: {
		...mapGetters({ isOpen: 'navbar/getNavbarState' }),
	},
	watch: {
		$route() {
			this.$store.commit('navbar/toggle');
		},
	},
};
</script>
