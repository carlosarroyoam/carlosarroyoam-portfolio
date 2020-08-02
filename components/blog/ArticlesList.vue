<template>
	<div v-bind:id="articles.id" class="">
		<ul id="" class="">
			<li v-bind:articles="item" v-bind:key="item.id" v-for="item in articles">
				<h2>{{ item.title }}</h2>
				<p>{{ item.description }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import ArticlesPagination from './ArticlesPagination';

export default {
	name: 'ArticlesList',
	data() {
		return {
			articles: this.articles,
		};
	},
	async asyncData({ $content, params }) {
		const [prev, next] = await $content('articles').only(['title', 'slug']).sortBy('createdAt', 'asc').surround(params.slug).fetch();

		return {
			prev,
			next,
		};
	},
};
</script>

<style lang="scss" scoped>
</style>