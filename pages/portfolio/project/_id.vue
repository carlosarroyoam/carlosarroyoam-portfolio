<template>
	<article>
		<header>
			<base-heading class="uppercase lg:text-center">Project title</base-heading>
		</header>

		{{ id }}
	</article>
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
