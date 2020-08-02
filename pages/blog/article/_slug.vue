<template>
	<main class="container-fluid">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
				<article>
					<img :src="article.img" :alt="article.alt" />
					<p>{{ formatDate(article.updatedAt) }}</p>

					<nuxt-content :document="article" />

					<author :author="article.author" />
				</article>
			</div>
		</div>
	</main>
</template>

<script>
import Author from '../../../components/blog/Author';

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
		return { article };
	},
};
</script>

<style lang="scss" scoped>
</style>