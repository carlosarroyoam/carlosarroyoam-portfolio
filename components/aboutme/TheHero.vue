<template>
	<section class="flex flex-col px-12 py-10 mx-auto rounded shadow bg-footer">
		<base-heading class="uppercase">Carlos Alberto Arroyo Martínez</base-heading>
		<base-heading-secondary class="uppercase">SOFTWARE DEVELOPER</base-heading-secondary>
		<base-paragraph class="mt-4">
			Hola, soy un Ingeniero en Informática egresado del
			<a class="text-decoration-none" href="http://www.itsur.edu.mx" target="__blank">ITSUR</a>. Apasionado por el desarrollo de aplicaciones web y móviles, la tecnología y los videojuegos. Cuento con sólidos conocimientos en diversas tecnologías web y
			móviles, bases de datos relacionales y alguno que otro framework web MVC. Tengo 24 años y actualmente radico en la ciudad de Apaseo el Alto, Guanajuato.
		</base-paragraph>

		<base-button-link class="mt-4" href="portfolio">
			{{ $t('nav_links.portfolio') }}
		</base-button-link>
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
