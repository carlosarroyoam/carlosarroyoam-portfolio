<template>
	<div v-bind:id="articles.id" class="">
		<ul id="" class="">
			<li
				v-bind:articles="item"
				v-bind:key="item.id"
				v-for="item in articles"
			>
				<h2>{{ item.title }}</h2>
				<p>{{ item.description }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ArticlesList',
	data() {
		return {
			articles: [
				{
					id: 1,
					title: 'Title 1',
					description: 'Lorem ipsum'
				},
				{
					id: 2,
					title: 'Title 2',
					description: 'Lorem ipsum'
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
</style>