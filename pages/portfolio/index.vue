<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-6 mx-auto">
				<h1 class="text-md-center text-uppercase">
					{{ $t('nav_links.portfolio') }}
				</h1>
				<p class="text-md-center">
					<strong>Whoops! Todavía me encuentro construyendo esta sección.</strong><br />
					Pronto estará lista :) Si quieres ver algo de mi trabajo puedes ir a mi perfil en
					<a class="text-center font-weight-bold text-decoration-none" target="_blank" href="https://github.com/carlosarroyoam/">GitHub</a>
					ahí encontraras mucho código.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import ProjectItem from '../../components/portfolio/ProjectItem';

export default {
	name: 'Portfolio',
	layout: 'app',
	components: {
		ProjectItem,
	},
	data() {
		return {};
	},
	head() {
		return {
			title: this.$t('nav_links.portfolio'),
		};
	},
};
</script>

<style lang="scss" scoped>
.projects {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
}

@media only screen and (max-width: 768px) {
	.projects {
		flex-direction: column;
	}
}
</style>
