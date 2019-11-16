<template>
	<div>
		<Header />
		<nuxt class="close-nav-onclick" />
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