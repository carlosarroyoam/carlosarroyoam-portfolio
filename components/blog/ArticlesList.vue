<template>
	<section class="mt-6">
		<div class="grid gap-4 lg:col-3" v-for="article of articles" :key="article.slug">
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
			type: Object,
			required: true,
		},
	},
};
</script>
