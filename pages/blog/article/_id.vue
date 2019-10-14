<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
				<h3>Article</h3>
				{{ id }}
			</div>
		</div>

		<div class="row pt-3">
			<div class="col-sm-12 col-md-10 mx-auto">
				<!-- <ArticlesList /> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Article',
	layout: 'app',
	components: {},
	data() {
		return {};
	},
	head() {
		return {
			title: 'Change article name',
			meta: [{ hid: 'description', name: 'description', content: 'My custom description' }]
		};
	},
	created() {
		this.id = this.$route.params.id;
	}
};
</script>

<style lang="scss" scoped>
</style>