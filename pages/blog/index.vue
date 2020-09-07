<template>
	<article>
		<header>
			<base-heading class="uppercase lg:text-center">{{ $t('nav_links.blog') }}</base-heading>
			<base-paragraph class="md:text-center">Encuentra artículos interesantes ¡Cada Semana! ❤️</base-paragraph>
		</header>

		<ArticlesList v-bind:articles="articles" />
	</article>
</template>

<script>
import ArticlesList from '~/components/blog/ArticlesList';

export default {
	name: 'Blog',
	layout: 'app',
	components: {
		ArticlesList,
	},
	head() {
		return {
			title: this.$t('nav_links.blog'),
			meta: [{ hid: 'description', name: 'description', content: 'My custom description' }],
		};
	},
	async asyncData({ $content, params }) {
		const articles = await $content('articles').only(['title', 'description', 'img', 'slug', 'author']).sortBy('createdAt', 'asc').limit(5).skip(0).fetch();

		return {
			articles,
		};
	},
};
</script>
