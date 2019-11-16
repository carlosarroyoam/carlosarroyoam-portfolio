<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-6 mx-auto">
				<div v-if="error.statusCode === 404">
					<h1 class="text-center text-uppercase">
						{{ $t('errors.not_found_title') }}
					</h1>

					<img class="d-block mx-auto my-5" width="250px" src="~@/assets/img/404.svg" alt="Page not found  image, a ghost being abducted." />

					<p class="text-center">
						{{ $t('errors.not_found_message') }}
					</p>
				</div>

				<h1 v-else class="text-center text-uppercase">{{ $t('errors.error') }}</h1>

				<div class="col-sm-12 col-md-6 col-lg-4 mx-auto">
					<nuxt-link :to="localePath({ name: 'aboutme' })" class="btn btn-link btn-block text-decoration-none text-center text-uppercase" role="button">
						{{ $t('nav_links.go_home') }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'app',
	props: ['error'],
	head() {
		return {
			title: this.$t('errors.error')
		};
	}
};
</script>