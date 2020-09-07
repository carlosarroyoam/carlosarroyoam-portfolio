<template>
	<section>
		<ul>
			<li v-for="project of projects" :key="project.slug">
				<ProjectCard v-bind:project="project" />
			</li>
		</ul>
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
