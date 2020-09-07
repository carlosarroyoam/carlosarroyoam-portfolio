<template>
	<section class="mt-6">
		<div class="grid gap-4 lg:col-3" v-for="project of projects" :key="project.slug">
			<ProjectCard v-bind:project="project" />
		</div>
	</section>
</template>


<script>
import ProjectCard from '~/components/portfolio/ProjectCard';

export default {
	name: 'ProjectsList',
	components: {
		ProjectCard,
	},
};
</script>
