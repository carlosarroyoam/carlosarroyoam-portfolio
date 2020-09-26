<template>
	<article>
		<TheHero />

		<div class="mx-auto lg:w-9/12">
			<TheTechnologiesResume class="mt-8" />

			<TheWorkTogetherButton class="mt-10" />
		</div>
	</article>
</template>

<script>
import TheHero from '~/components/aboutme/TheHero';
import TheTechnologiesResume from '~/components/aboutme/TheTechnologiesResume';
import TheWorkTogetherButton from '~/components/aboutme/TheWorkTogetherButton';

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
			meta: [{ hid: 'description', name: 'description', content: 'Home page description' }],
		};
	},
	paths: {
		en: '/about-me',
		es: '/sobre',
	},
};
</script>

<style lang="scss" scoped>
.custom-line-height {
	line-height: 1.3;
}
</style>
