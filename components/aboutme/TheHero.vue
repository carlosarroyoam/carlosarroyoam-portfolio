<template>
	<section class="flex flex-col px-4 py-12 mx-auto rounded shadow lg:text-center lg:px-16 bg-footer">
		<base-heading class="uppercase">Carlos Alberto Arroyo Martínez</base-heading>
		<base-heading-secondary class="uppercase">SOFTWARE DEVELOPER</base-heading-secondary>
		<base-paragraph class="mt-4">
			Hola, soy un Ingeniero en Informática egresado del
			<base-hyperlink class="font-semibold" href="http://www.itsur.edu.mx" target="__blank">ITSUR</base-hyperlink>. Apasionado por el desarrollo de aplicaciones web y móviles, la tecnología y los videojuegos. Cuento con sólidos conocimientos en diversas
			tecnologías web y móviles, bases de datos relacionales y alguno que otro framework web MVC. Tengo 24 años y actualmente radico en la ciudad de Apaseo el Alto, Guanajuato.
		</base-paragraph>

		<div class="mx-auto lg:w-6/12">
			<base-button-link class="mt-6" href="portfolio">
				{{ $t('nav_links.portfolio') }}
			</base-button-link>
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
