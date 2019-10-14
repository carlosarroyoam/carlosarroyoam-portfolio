<template>
	<div class="technologies-wrapper">
		<div v-bind:key="area.id" v-for="area in areas" v-bind:id="area.id" class="technologies-card shadow-sm">
			<span class="icon-wrapper">
				<i class="technologies-icon fas" v-bind:class="area.icon"></i>
			</span>
			<h4 class="d-inline-block technologies-title text-uppercase">
				{{ area.title }}
			</h4>
			<ul id="technologies.id" class="technologies-list">
				<li v-bind:key="technology" v-for="technology in area.technologies">
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
					id: 'tech-card-1',
					title: 'Back-end',
					icon: 'fa-server',
					technologies: ['Java', 'C#', 'PHP', 'Laravel', 'SQL Databases', 'Web Services', 'Web Sockets']
				},
				{
					id: 'tech-card-2',
					title: 'Front-end',
					icon: 'fa-desktop',
					technologies: ['HTML5', 'JavaScript', 'CSS', 'Angular', 'Vue.js', 'jQuery', 'Bootstrap']
				},
				{
					id: 'tech-card-3',
					title: 'Mobile',
					icon: 'fa-mobile',
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
	grid-template-areas: 'tech-card-1 tech-card-2 tech-card-3';
}

#tech-card-1 {
	grid-area: tech-card-1;
}

#tech-card-2 {
	grid-area: tech-card-2;
}

#tech-card-3 {
	grid-area: tech-card-3;
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
		grid-template-areas: 'tech-card-1' 'tech-card-2' 'tech-card-3';
	}
}

.technologies-card {
	padding: 1em 1em 0 1em;
	background-color: var(--white);
	display: block;
	text-align: center;
}

.icon-wrapper {
	width: 5em;
	height: 5em;
	margin: 0 auto 0.6em auto;
	background-color: var(--blue);
	border-radius: 100%;
	display: flex;
	align-items: flex-start;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
}

.technologies-icon {
	margin: 0 auto;
	font-size: 3em;
	color: var(--white);
	align-self: center;
	grid-area: icon;
	display: inline-block;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
}

.technologies-list {
	padding: 0.3em 0 0 0;
	list-style: none;
	display: block;
}
</style>
