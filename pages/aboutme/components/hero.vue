<template>
	<div class="jumbotron text-md-center shadow-sm">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-8 mt-5 mx-auto">
				<h1 class="display-1 mt-5 mb-1 text-white text-uppercase">Carlos Alberto Arroyo Martínez</h1>
				<h1 class="display-2 text-light text-uppercase">SOFTWARE DEVELOPER</h1>

				<p class="text-light text-md-center mt-3">
					Hola, soy un Ingeniero en Informática egresado del
					<a class="text-success text-decoration-none" href="http://www.itsur.edu.mx" target="__blank">ITSUR</a>. Apasionado por el desarrollo de aplicaciones web y móviles, la tecnología y los videojuegos. Cuento con conocimientos en diversas
					tecnologías web y móviles, bases de datos relacionales y alguno que otro Framework web. Tengo 24 años y actualmente radico en la cuidad de Apaseo el Alto, Guanajuato.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 text-center mt-5 mx-auto">
				<nuxt-link :to="localePath({ name: 'portfolio' })" tag="a" class="text-decoration-none">
					<button type="button" class="btn btn-primary btn-block text-uppercase px-4 shadow-sm">
						{{ $t('nav_links.portfolio') }}
					</button>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Hero',
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.jumbotron {
	margin-top: -2.2em;
	min-height: calc(100vh - 3em);
	background-image: url('../../../assets/img/carlosarroyoam_hero_background.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

////
// Device = Smartphones Mobiles (Portrait)
// Screen = Less than 768px
//
@media only screen and (max-width: 768px) {
	.jumbotron {
		min-height: 80vh;
	}
}
</style>
