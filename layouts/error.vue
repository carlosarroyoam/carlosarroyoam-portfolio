<template>
	<article>
		<template v-if="error.statusCode === 404">
			<header>
				<base-heading class="uppercase lg:text-center">
					{{ $t('errors.not_found_title') }}
				</base-heading>
				<img class="mx-auto my-5 d-block" width="250px" src="~@/assets/img/404.svg" alt="Page not found  image, a ghost being abducted." />

				<base-paragraph class="lg:text-center">
					{{ $t('errors.not_found_message') }}
				</base-paragraph>
			</header>
		</template>

		<template v-else>
			<header>
				<base-heading class="uppercase lg:text-center">
					{{ $t('errors.error') }}
				</base-heading>
				<img class="mx-auto my-5 d-block" width="250px" src="~@/assets/img/404.svg" alt="Page not found  image, a ghost being abducted." />

				<base-paragraph class="lg:text-center"> </base-paragraph></header
		></template>

		<div class="mx-auto lg:w-4/12">
			<base-button-link class="mt-6" href="aboutme">
				{{ $t('nav_links.go_home') }}
			</base-button-link>
		</div>
	</article>
</template>

<script>
export default {
	layout: 'app',
	props: ['error'],
	head() {
		return {
			title: this.$t('errors.error'),
		};
	},
};
</script>
