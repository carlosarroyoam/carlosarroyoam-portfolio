<template>
	<article>
		<TheHero />

		<!-- <TheTechnologiesResume class="mt-12" /> -->

		<!-- <TheWorkTogetherButton class="mt-16" /> -->
	</article>
</template>

<script>
import TheHero from '~/components/about-me/TheHero';
import TheTechnologiesResume from '~/components/about-me/TheTechnologiesResume';
import TheWorkTogetherButton from '~/components/about-me/TheWorkTogetherButton';

export default {
	name: 'AboutMe',
	layout: 'app',
	components: {
		TheHero,
		TheTechnologiesResume,
		TheWorkTogetherButton,
	},
	head() {
		return {
			title: this.$t('nav_links.about_me'),
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Hola, soy un Ingeniero en Informática egresado del ITSUR. Apasionado por el desarrollo de aplicaciones web y móviles, la tecnología y los videojuegos. Cuento con sólidos conocimientos en diversas tecnologías web y móviles, bases de datos relacionales y alguno que otro framework web MVC. Tengo 25 años y actualmente radico en la ciudad de Apaseo el Alto, Guanajuato.',
				},
			],
		};
	},
	paths: {
		en: '/about-me',
		es: '/sobre',
	},
};
</script>
