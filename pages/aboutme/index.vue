<template>
	<main>
		<article class="container-fluid">
			<div class="row">
				<div class="col px-0">
					<TheHero />
				</div>
			</div>

			<div class="row">
				<div class="col-sm-12 col-md-10 col-lg-8 mt-5 mx-auto">
					<TheTechnologiesResume />
				</div>
			</div>

			<div class="row">
				<div class="col-sm-12 col-md-10 mt-5 mx-auto">
					<TheWorkTogetherButton />
				</div>
			</div>
		</article>
	</main>
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
