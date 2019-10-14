<template>
	<div class="container-fluid section-content">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
				<div class="text-center my-5">
					<i class="fas fa-exclamation-circle text-danger"></i>
				</div>

				<div v-if="error.statusCode === 404">
					<h1 class="text-center text-uppercase">
						{{ $t('errors.not_found_title') }}
					</h1>

					<p class="text-center">
						{{ $t('errors.not_found_message') }}
					</p>
				</div>

				<h1 v-else>{{ $t('errors.error') }}</h1>

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
	props: ['error'],
	layout: 'app',
	head() {
		return {
			title: this.$t('errors.error')
		};
	}
};
</script>

<style lang="scss" scoped>
.fa-exclamation-circle {
	font-size: 12rem;
}
</style>