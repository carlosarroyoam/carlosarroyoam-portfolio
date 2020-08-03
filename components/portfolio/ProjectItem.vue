<template>
	<nuxt-link tag="div" :to="localePath({ name: 'portfolio-project-id', params: { id: 1 } })" class="project">
		<img class="project__image" src="~@/assets/img/projects/ContactMe – Sketch.svg" alt="Project image" />

		<div class="proyect__description">
			<h6 class="technologies-title font-weight-bold">
				Metals of Art de Mexico.
			</h6>
			<span class="technology__badge">PHP</span>
			<span class="technology__badge">HTML5</span>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: 'ProjectItem',
	data() {
		return {
			msg: '',
		};
	},
};
</script>
