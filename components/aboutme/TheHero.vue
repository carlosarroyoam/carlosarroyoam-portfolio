<template>
	<section class="jumbotron px-3 py-5 text-md-center shadow-sm">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-8 mt-3 mt-md-5 mx-auto">
				<h1 class="display-1 mb-1 text-uppercase">Carlos Alberto Arroyo Martínez</h1>
				<h2 class="display-2 text-uppercase">SOFTWARE DEVELOPER</h2>

				<p class="text-md-center mt-3">
					Hola, soy un Ingeniero en Informática egresado del
					<a class="text-decoration-none" href="http://www.itsur.edu.mx" target="__blank">ITSUR</a>. Apasionado por el desarrollo de aplicaciones web y móviles, la tecnología y los videojuegos. Cuento con sólidos conocimientos en diversas tecnologías
					web y móviles, bases de datos relacionales y alguno que otro framework web MVC. Tengo 24 años y actualmente radico en la ciudad de Apaseo el Alto, Guanajuato.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 text-center mt-5 mb-4 mb-md-5 mx-auto">
				<nuxt-link :to="localePath({ name: 'portfolio' })" tag="a" class="text-decoration-none">
					<button type="button" class="btn btn-primary btn-block text-uppercase px-4 shadow-sm">
						{{ $t('nav_links.portfolio') }}
					</button>
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'TheHero',
	data() {
		return {};
	},
};
</script>
