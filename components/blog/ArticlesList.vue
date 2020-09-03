<template>
	<ul>
		<li v-for="article of articles" :key="article.slug">
			<ArticleCard v-bind:article="article" />
		</li>
	</ul>
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
