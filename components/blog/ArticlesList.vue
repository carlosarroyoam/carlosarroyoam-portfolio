<template>
	<section class="grid gap-6 mt-6 lg:grid-cols-3">
		<div v-for="article in articles" :key="article.slug">
			<ArticleCard v-bind:article="article" />
		</div>
	</section>
</template>


<script>
import ArticleCard from '~/components/blog/ArticleCard';

export default {
	name: 'ArticlesList',
	components: {
		ArticleCard,
	},
	props: {
		articles: {
			type: Array,
			required: true,
		},
	},
};
</script>
