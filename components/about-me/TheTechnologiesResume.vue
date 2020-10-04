<template>
	<section>
		<base-heading-secondary class="uppercase md:text-center">Technical Skills</base-heading-secondary>
		<base-paragraph class="md:text-center"
			>A lo largo de mi carrera he desarrollado aplicaciones web y móviles con las siguientes tecnologías. Además, constantemente estoy formándome, y siempre estoy abierto a aprender nuevos lenguajes y adquirir más conocimientos.</base-paragraph
		>

		<div class="grid gap-4 mt-5 lg:grid-cols-3">
			<div class="my-4 overflow-hidden rounded shadow bg-background-secondary" :key="technical_skills.title" v-for="development_area in technical_skills">
				<div class="flex flex-row items-start justify-start p-4 bg-primary">
					<img class="inline-block w-12 h-12" v-bind:src="require('~/assets/img/icons/' + development_area.icon)" v-bind:alt="development_area.icon_alt" />
					<p class="inline-block ml-4 text-base text-gray-100 uppercase">
						{{ development_area.title }}
					</p>
				</div>

				<ul class="px-6 py-4">
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
