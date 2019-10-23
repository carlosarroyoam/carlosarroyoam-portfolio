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
						<span class="d-flex align-items-center justify-content-center">
							Enviar un email
							<svg class="svg-icon ml-3" viewBox="0 0 512 512">
								<path
									d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
								/>
							</svg>
						</span>
					</button>
				</a>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12 col-md-5 col-lg-4 mt-5 mx-auto social-links-container">
				<nuxt-link tag="a" :to="localePath({ name: 'contactme-resume' })" class="social-button-container text-decoration-none">
					<div class="social-button">
						<svg class="social-icon ml-2" viewBox="0 0 512 512">
							<path
								d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
							/>
						</svg>
					</div>
					<div class="text-center">Curriculum</div>
				</nuxt-link>

				<a target="_blank" href="https://www.linkedin.com/in/carlosarroyoam/" class="social-button-container text-decoration-none">
					<div class="social-button">
						<svg class="social-icon ml-2" viewBox="0 0 512 512">
							<path
								d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
							/>
						</svg>
					</div>
					<div class="text-center">LinkedIn</div>
				</a>

				<a target="_blank" href="https://github.com/carlosarroyoam/" class="social-button-container text-decoration-none">
					<div class="social-button">
						<svg class="social-icon ml-1" viewBox="0 0 512 512">
							<path
								d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
							/>
						</svg>
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
			title: this.$t('nav_links.contact_me')
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
	transition-duration: 500ms;
	transition-property: opacity;
}

.social-button {
	background-color: var(--blue);
	width: 4.2em;
	height: 4.2em;
	margin: 5px auto;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.social-icon {
	fill: #fff;
	width: 2.5em;
	height: 2.5em;
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
