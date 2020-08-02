<template>
	<div>
		<TheNavbar />
		<nuxt />
		<TheFooter />
	</div>
</template>

<script>
import TheNavbar from '../components/TheNavbar';
import TheFooter from '../components/TheFooter';

export default {
	name: 'App',
	head() {
		return this.$nuxtI18nSeo();
	},
	components: {
		TheNavbar,
		TheFooter,
	},
};
</script>