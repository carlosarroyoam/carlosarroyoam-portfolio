<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
				<h1 class="text-md-center text-uppercase">
					{{ $t('nav_links.blog') }}
				</h1>
				<p class="text-md-center">
					Encuentra artículos interesantes ¡Cada Semana! ❤️
				</p>
			</div>
		</div>

		<div class="row pt-3">
			<div class="col-sm-12 col-md-10 mx-auto">
				<!-- <ArticlesList /> -->
			</div>
		</div>
	</div>
</template>

<script>
import ArticlesList from './components/articles_list';
export default {
	name: 'Blog',
	layout: 'app',
	components: {
		ArticlesList
	},
	data() {
		return {};
	},
	head() {
		return {
			title: this.$t('nav_links.blog'),
			meta: [{ hid: 'description', name: 'description', content: 'My custom description' }]
		};
	}
};
</script>

<style lang="scss" scoped>
</style>