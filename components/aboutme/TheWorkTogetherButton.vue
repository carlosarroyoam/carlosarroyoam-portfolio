<template>
	<section class="container-fluid">
		<div class="row px-2 py-4 bg-secondary rounded shadow-sm">
			<div class="col-sm-12 col-md-7 col-lg-6 my-auto mx-auto mr-xl-3">
				<h3 class="m-0 text-center text-uppercase text-white custom-line-height">
					Trabajemos juntos en
					<span class="text-primary">proyectos increíbles</span>
				</h3>
			</div>
			<div class="col-sm-12 col-md-5 col-lg-4 my-auto mx-auto">
				<nuxt-link :to="localePath({ name: 'contactme' })" tag="a" class="text-decoration-none">
					<button type="button" class="btn btn-primary btn-lg btn-block text-uppercase text-white mt-3 mt-md-0 px-4">
						{{ $t('nav_links.contact_me') }}
					</button>
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'TheWorkTogetherButton',
	data() {
		return {};
	},
};
</script>
