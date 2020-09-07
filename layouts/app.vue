<template>
	<div class="flex flex-col min-h-screen pt-20 text-sm antialiased theme-light bg-background text-body">
		<TheHeader />
		<TheMain>
			<nuxt />
		</TheMain>
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '~/components/layout/TheHeader';
import TheFooter from '~/components/layout/TheFooter';
import TheMain from '~/components/layout/TheMain';

export default {
	name: 'App',
	head() {
		return this.$nuxtI18nSeo();
	},
	components: {
		TheHeader,
		TheFooter,
		TheMain,
	},
};
</script>
