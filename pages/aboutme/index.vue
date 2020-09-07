<template>
	<article class="mx-auto lg:w-3/4">
		<div class="row">
			<div class="px-0 col">
				<TheHero />
			</div>
		</div>

		<div class="row">
			<div class="mx-auto mt-5 col-sm-12 col-md-10 col-lg-8">
				<TheTechnologiesResume />
			</div>
		</div>

		<div class="row">
			<div class="mx-auto mt-5 col-sm-12 col-md-10">
				<TheWorkTogetherButton />
			</div>
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
		};
	},
};
</script>

<style lang="scss" scoped>
.custom-line-height {
	line-height: 1.3;
}
</style>
