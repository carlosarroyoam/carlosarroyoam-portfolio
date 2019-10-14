<template>
	<div>
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Header from '../components/header';
import Footer from '../components/footer';

export default {
	name: 'App',
	head() {
		return this.$nuxtI18nSeo();
	},
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="scss">
// Fonts
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

// Variables
@import '../assets/scss/variables';

// Bootstrap
@import '../assets/scss/vendor/bootstrap/bootstrap';

// Fontawesome
@import '../assets/scss/vendor/fontawesome/fontawesome';

// Base app styles
@import '../assets/scss/app/app';
</style>