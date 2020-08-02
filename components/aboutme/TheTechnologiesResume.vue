<template>
	<div class="technologies-wrapper">
		<div class="technologies-card shadow-sm" :key="technical_skills.title" v-for="development_area in technical_skills">
			<span class="technologies-card-header">
				<img class="technologies-icon" v-bind:src="'../../../img/icons/' + development_area.icon" v-bind:alt="development_area.icon_alt" />
				<h4 class="d-inline-block text-uppercase">
					{{ development_area.title }}
				</h4>
			</span>

			<ul class="technologies-list mt-2">
				<li :key="technology" v-for="technology in development_area.technologies">
					{{ technology }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import technichalSkillsJson from '../../data/technical_skills.json';

export default {
	name: 'Technologies',
	data() {
		return {
			technical_skills: technichalSkillsJson.technical_skills,
		};
	},
};
</script>

<style lang="scss" scoped>
.technologies-wrapper {
	display: grid;
	grid-gap: 1.5em;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	grid-template-areas: 'backend frontend mobile';
}

@media (max-width: 1280px) {
	.technologies-wrapper {
		grid-gap: 1em;
	}
}

@media only screen and (max-width: 768px) {
	.technologies-wrapper {
		padding: 0 5em;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, auto);
		grid-template-areas:
			'backend'
			'frontend'
			'mobile';
	}
}

.technologies-card {
	background-color: var(--white);
	display: block;
	text-align: center;
	border-radius: 0.15em;
}

.technologies-card-header {
	width: 100%;
	height: 5.5rem;
	padding: 1rem 1.5rem;
	background-color: var(--blue);
	border-radius: 0.15em 0.15em 0 0;
	display: flex;
	align-items: flex-start;
	color: #fff;
}

.technologies-icon {
	width: 3.5rem;
	height: 3.5rem;
	margin-right: 1.5rem;
}

.technologies-list {
	padding: 0.3em 0 0 1.5rem;
	color: var(--gray-600);
	list-style: none;
	text-align: left;
	display: block;
}
</style>
