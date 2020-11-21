<template>
	<article>
		<div class="lg:w-6/12">
			<header>
				<app-heading-1>{{ $t('nav_links.portfolio') }}</app-heading-1>
				<app-paragraph class="max-w-3xl">
					<strong>Whoops! Todavía me encuentro construyendo esta sección.</strong><br />
					Pronto estará lista :) Si quieres ver algo de mi trabajo puedes ir a mi perfil en
					<a class="text-center font-weight-bold text-decoration-none" target="_blank" rel="nofollow" href="https://github.com/carlosarroyoam/">GitHub</a>
					ahí encontraras mucho código.
				</app-paragraph>
			</header>

			<ProjectsList v-bind:projects="projects" />
		</div>
	</article>
</template>

<script>
import Heading1 from '~/components/commons/button/Heading1.vue';
import Paragraph from '~/components/commons/button/Paragraph.vue';
import ProjectsList from '~/components/portfolio/ProjectsList';

export default {
	name: 'Portfolio',
	layout: 'app',
	components: {
		ProjectsList
	},
	data() {
		return {};
	},
	head() {
		return {
			title: this.$t('nav_links.portfolio'),
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Conoce los proyectos de desarrollo de software que he realizado.',
				},
			],
		};
	},
	async asyncData({ $content, params }) {
		const projects = {};

		return {
			projects,
		};
	},
};
</script>
