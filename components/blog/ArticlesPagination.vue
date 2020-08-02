<template>
	<div>
		adsfkjldsajlkfdsjlk
		<NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
			{{ prev.title }}
		</NuxtLink>

		<NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }">
			{{ next.title }}
		</NuxtLink>
	</div>
</template>

<script>
export default {
	name: 'ArticlesPagination',
	async asyncData({ $content, params }) {
		const [prev, next] = await $content('articles').only(['title', 'slug']).sortBy('createdAt', 'asc').surround(params.slug).fetch();

		return {
			prev,
			next,
		};
	},
};
</script>