<template>
	<article>
		<div class="mx-auto lg:w-9/12">
			<header>
				<base-heading class="uppercase lg:text-center"> {{ $t('nav_links.portfolio') }} </base-heading>
				<base-paragraph class="lg:text-center"
					><strong>Whoops! Todavía me encuentro construyendo esta sección.</strong><br />
					Pronto estará lista :) Si quieres ver algo de mi trabajo puedes ir a mi perfil en
					<a class="text-center font-weight-bold text-decoration-none" target="_blank" rel="nofollow" href="https://github.com/carlosarroyoam/">GitHub</a>
					ahí encontraras mucho código.</base-paragraph
				>
			</header>
			<ProjectsList v-bind:projects="projects" />
		</div>
	</article>
</template>

<script>
import ProjectsList from '~/components/portfolio/ProjectsList';

export default {
	name: 'Portfolio',
	layout: 'app',
	components: {
		ProjectsList,
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
