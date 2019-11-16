<template>
	<div class="technologies-wrapper">
		<div class="technologies-card shadow-sm" :key="area.title" v-for="area in areas">
			<span class="icon-wrapper"> <img class="technologies-icon" :src="area.icon" :alt="area.icon_alt" /> </span>
			<h4 class="d-inline-block text-uppercase">
				{{ area.title }}
			</h4>
			<ul class="technologies-list mt-2">
				<li :key="technology" v-for="technology in area.technologies">
					{{ technology }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Technologies',
	data() {
		return {
			areas: [
				{
					title: 'Back-end',
					icon: require('../../../assets/img/icons/server.svg'),
					icon_alt: 'Backend icon, a server illustration',
					technologies: ['Java', 'C#', 'PHP', 'Laravel', 'SQL Databases', 'Web Services', 'Web Sockets']
				},
				{
					title: 'Front-end',
					icon: require('../../../assets/img/icons/desktop.svg'),
					icon_alt: 'Frontend icon, a desktop illustration',
					technologies: ['HTML5', 'JavaScript', 'CSS', 'Angular', 'Vue.js', 'jQuery', 'Bootstrap']
				},
				{
					title: 'Mobile',
					icon: require('../../../assets/img/icons/mobile.svg'),
					icon_alt: 'Mobile icon, a mobile device illustration',
					technologies: ['Android Nativo', 'Flutter', 'SQLite']
				}
			]
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

////
// Device = Laptops, Desktops
// Screen = B/w 1025px to 1280px
//
@media (max-width: 1280px) {
	.technologies-wrapper {
		grid-gap: 1em;
	}
}

////
// Device = Most of the Smartphones Mobiles (Portrait)
//
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
