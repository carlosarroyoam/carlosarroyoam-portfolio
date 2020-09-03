<template>
	<main class="container-fluid">
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
				<ul>
					<li v-for="article of articles" :key="article.slug">
						<NuxtLink :to="localePath({ name: 'blog-article-slug', params: { slug: article.slug } })">
							<img :src="article.img" />
							<div>
								<h2>{{ article.title }}</h2>
								<p>by {{ article.author.name }}</p>
								<p>{{ article.description }}</p>
							</div>
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Blog',
	layout: 'app',
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
