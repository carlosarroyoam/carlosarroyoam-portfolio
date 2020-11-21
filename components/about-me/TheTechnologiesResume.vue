<template>
	<section>
		<app-heading-2 class="mx-auto text-center">Technical Skills</app-heading-2>

		<div class="grid gap-6 mt-8 lg:mx-auto lg:w-7/12 lg:grid-cols-3">
			<TechnologiesCard :key="technical_skills.title" v-for="development_area in technical_skills" :development_area="development_area" />
		</div>
	</section>
</template>

<script>
import TechnologiesCard from '~/components/about-me/TechnologiesCard'
import technichalSkillsJson from '~/data/technical_skills.json';
import Heading2 from '../commons/button/Heading2.vue';

export default {
  name: 'TheTechnologiesResume',
  components: {
    TechnologiesCard
  },
	data() {
		return {
			technical_skills: technichalSkillsJson.technical_skills,
		};
	},
};
</script>
