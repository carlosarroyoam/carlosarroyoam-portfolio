<template>
	<article>
		<header>
			<base-heading class="uppercase lg:text-center">{{ article.title }}</base-heading>
			<base-paragraph class="md:text-center">{{ article.description }}</base-paragraph>
		</header>

		<img :src="article.img" :alt="article.alt" />
		<p>{{ formatDate(article.updatedAt) }}</p>

		<nuxt-content :document="article" />

		<Author :author="article.author" />
	</article>
</template>

<script>
import Author from '~/components/blog/Author';

export default {
	name: 'Article',
	layout: 'app',
	components: {
		Author,
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' };
			return new Date(date).toLocaleDateString('es-mx', options);
		},
	},
	head() {
		return {
			title: this.article.title,
			meta: [{ hid: 'description', name: 'description', content: this.article.description }],
		};
	},
	async asyncData({ $content, params }) {
		const article = await $content('articles', params.slug).fetch();

		return {
			article,
		};
	},
};
</script>
