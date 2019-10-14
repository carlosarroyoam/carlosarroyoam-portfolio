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
			msg: ''
		};
	}
};
</script>

<style lang="scss" scoped>
.project {
	margin: 1em;
	flex: 0 1 calc(33.33% - 2em);
	background-color: var(--color-dark);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project:hover {
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.project .project__image {
	max-width: 100%;
	min-width: 100%;
}

.proyect__description {
	background-color: var(--color-light);
	padding: 1em;
}

.technology__badge {
	padding: 0 1em;
	border-radius: 0.9em;
	background-color: var(--color-secondary);
	color: var(--color-secondary-contrast);
	font-size: 0.8rem;
	font-weight: bold;
}

@media only screen and (max-width: 991px) {
	.project {
		flex: 0 1 calc(50% - 2em);
	}
}
</style>
