<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 col-md-10 col-lg-8 mx-auto">
				<h1 class="text-md-center text-uppercase">Conecta conmigo</h1>
				<p class="text-md-center">
					Si tienes alguna pregunta, una oportunidad de trabajo o simplemente deseas saludarme, no dudes en ponerte en contacto conmigo. A continuación están mi curriculum vitae, mis páginas sociales y mi correo electrónico:
				</p>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 mt-3 mx-auto text-center">
				<a class="text-decoration-none" href="mailto:carlosarroyoam@gmail.com">
					<button type="button" class="btn btn-primary btn-block px-4">
						Enviar un email
						<i class="far fa-envelope ml-2"></i>
					</button>
				</a>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12 col-md-5 col-lg-4 mt-5 mx-auto social-links-container">
				<nuxt-link tag="a" :to="localePath({ name: 'contactme-resume' })" class="social-button-container text-decoration-none">
					<div class="social-button">
						<i class="fas fa-file-alt"></i>
					</div>
					<div class="text-center">Curriculum</div>
				</nuxt-link>

				<a target="_blank" href="https://www.linkedin.com/in/carlosarroyoam/" class="social-button-container text-decoration-none">
					<div class="social-button">
						<i class="fab fa-linkedin-in"></i>
					</div>
					<div class="text-center">LinkedIn</div>
				</a>

				<a target="_blank" href="https://github.com/carlosarroyoam/" class="social-button-container text-decoration-none">
					<div class="social-button">
						<i class="fab fa-github"></i>
					</div>
					<div class="text-center">GitHub</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactMe',
	layout: 'app',
	data() {
		return {};
	},
	head() {
		return {
			title: this.$t('nav_links.contact_me'),
			meta: [{ hid: 'description', name: 'description', content: 'My custom description' }]
		};
	}
};
</script>

<style lang="scss" scoped>
.social-links-container {
	display: grid;
	grid-gap: 2em;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
}

.social-button {
	background-color: var(--blue);
	color: var(--white);
	font-size: 2.5em;
	width: 1.8em;
	height: 1.8em;
	text-align: center;
	text-decoration: none;
	margin: 5px auto;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.social-button-container:hover {
	opacity: 0.6;
}

////
// Device = Laptops, Desktops
// Screen = max-width 1280px
//
@media (max-width: 1280px) {
	.social-links-container {
		grid-gap: 1.5em;
	}
}

////
// Device = Most of the Smartphones Mobiles (Portrait)
// Screen = max-width 768px
//
@media only screen and (max-width: 768px) {
	.social-links {
		padding: 0 3em;
	}
}
</style>
