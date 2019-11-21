<template>
	<div class="technologies-wrapper">
		<div class="technologies-card shadow-sm" :key="technical_skills.title" v-for="development_area in technical_skills">
			<span class="icon-wrapper"> <img class="technologies-icon" v-bind:src="'../../../img/icons/' + development_area.icon" v-bind:alt="development_area.icon_alt" /> </span>
			<h4 class="d-inline-block text-uppercase">
				{{ development_area.title }}
			</h4>
			<ul class="technologies-list mt-2">
				<li :key="technology" v-for="technology in development_area.technologies">
					{{ technology }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import jsonFile from '../../../data/aboutme/technical_skills.json';

export default {
	name: 'Technologies',
	data() {
		return {
			technical_skills: jsonFile.technical_skills
		};
	}
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
	padding: 1em 1em 0 1em;
	background-color: var(--white);
	display: block;
	text-align: center;
	border-radius: 0.15em;
}

.icon-wrapper {
	width: 4.5em;
	height: 4.5em;
	margin: 0 auto 0.6em auto;
	background-color: var(--blue);
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.technologies-icon {
	width: 3em;
	height: 3em;
}

.technologies-list {
	padding: 0.3em 0 0 0;
	list-style: none;
	display: block;
}
</style>
