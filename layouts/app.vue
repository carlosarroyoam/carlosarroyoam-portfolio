<template>
	<div>
		<Navbar />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default {
	name: 'App',
	head() {
		return this.$nuxtI18nSeo();
	},
	components: {
		Navbar,
		Footer
	}
};
</script>