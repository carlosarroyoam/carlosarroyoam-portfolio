<template>
	<main>
		<TheHero />

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
				<div class="col-sm-12 col-md-10 col-lg-7 my-5 mx-auto">
					<TheTechnologiesResume />
				</div>
			</div>

			<div class="row mt-3 mx-1 mx-md-3 mx-lg-5 mx-xl-5 px-2 py-4 bg-secondary rounded shadow-sm">
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
		</div>
	</main>
</template>

<script>
import TheHero from '~/components/aboutme/TheHero';
import TheTechnologiesResume from '~/components/aboutme/TheTechnologiesResume';

export default {
	name: 'AboutMe',
	layout: 'app',
	components: {
		TheHero,
		TheTechnologiesResume,
	},
	head() {
		return {
			title: this.$t('nav_links.about_me'),
		};
	},
};
</script>

<style lang="scss" scoped>
.custom-line-height {
	line-height: 1.3;
}
</style>
