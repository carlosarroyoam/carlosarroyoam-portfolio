<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
				<h1 class="text-left text-uppercase d-inline">Curriculum</h1>
				<a class="float-right" target="_blank" href="/resources/cv-webversion-es.pdf">
					<button type="button" class="btn btn-primary px-4">
						Descargar versión PDF
						<i class="fas fa-file-pdf ml-2 ml-md-3"></i>
					</button>
				</a>
			</div>

			<div class="col-sm-12 col-md-10 col-lg-8 mt-3 mx-auto">
				<img class="img-fluid" src="~@/assets/img/cv-webversion-es.jpg" alt="Resume" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Resume',
	layout: 'app',
	data() {
		return {};
	},
	head() {
		return {
			title: this.$t('nav_links.resume'),
			meta: [{ hid: 'description', name: 'description', content: 'My custom description' }]
		};
	}
};
</script>

<style lang="scss" scoped>
</style>
