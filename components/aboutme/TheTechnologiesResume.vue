<template>
	<section>
		<h2 class="text-uppercase text-md-center">Technical Skills</h2>
		<p class="text-md-center">
			A lo largo de mi carrera he desarrollado aplicaciones web y móviles con las siguientes tecnologías. Además, constantemente estoy formándome, y siempre estoy abierto a aprender nuevos lenguajes y adquirir más conocimientos.
		</p>

		<div class="technologies-wrapper mt-5">
			<div class="technologies-card shadow-sm" :key="technical_skills.title" v-for="development_area in technical_skills">
				<span class="technologies-card-header">
					<img class="technologies-icon" v-bind:src="require('~/assets/img/icons/' + development_area.icon)" v-bind:alt="development_area.icon_alt" />
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
	</section>
</template>

<script>
import technichalSkillsJson from '~/data/technical_skills.json';

export default {
	name: 'TheTechnologiesResume',
	data() {
		return {
			technical_skills: technichalSkillsJson.technical_skills,
		};
	},
};
</script>
