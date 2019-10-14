<template>
	<div>
		<Hero />

		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-12 col-md-10 col-lg-8 mt-3 mx-auto">
					<h2 class="text-uppercase text-md-center">Technical Skills</h2>
					<p class="text-md-center">
						A lo largo de mi carrera he desarrollado aplicaciones web y móviles con las siguientes tecnologías. Además, constantemente estoy formándome, y siempre estoy abierto a aprender nuevos lenguajes y adquirir más conocimientos.
					</p>
				</div>
			</div>

			<div class="row">
				<div class="col-sm-12 col-md-10 col-lg-8 col-xl-7 my-5 mx-auto">
					<Technologies />
				</div>
			</div>

			<div class="row mt-3 mx-md-auto px-3 py-5 bg-secondary shadow-sm">
				<div class="col-sm-12 col-md-8 col-lg-6 my-auto mx-auto mr-lg-0">
					<h2 class="m-0 text-center text-md-left text-uppercase text-white">Trabajemos JUNTOS en uN <span class="text-primary">proyecto INCREÍBLE</span></h2>
				</div>
				<div class="col-sm-12 col-md-4 col-lg-4 my-auto mx-auto ml-lg-0">
					<nuxt-link :to="localePath({ name: 'contactme' })" tag="a" class="text-decoration-none">
						<button type="button" class="btn btn-outline-primary btn-lg btn-block text-uppercase text-white mt-3 mt-md-0 px-4">
							{{ $t('nav_links.contact_me') }}
						</button>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Hero from './components/hero';
import Technologies from './components/technologies';

export default {
	name: 'AboutMe',
	layout: 'app',
	components: {
		Hero,
		Technologies
	},
	data() {
		return {};
	},
	head() {
		return {
			title: this.$t('nav_links.about_me'),
			meta: [{ hid: 'description', name: 'description', content: 'My custom description' }]
		};
	}
};
</script>

<style lang="scss" scoped>
</style>
