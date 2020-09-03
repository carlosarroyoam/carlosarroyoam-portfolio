<template>
	<main class="container-fluid">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
				<h3>Proyecto</h3>
				{{ id }}
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Project',
	layout: 'app',
	data() {
		return {};
	},
	head() {
		return {
			title: 'Change project name',
		};
	},
	created() {
		this.id = this.$route.params.id;
	},
};
</script>

<style lang="scss" scoped>
</style>
