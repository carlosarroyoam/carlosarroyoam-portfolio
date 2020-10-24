<template>
	<section class="flex flex-col px-8 py-4 overflow-hidden text-center text-gray-100 uppercase rounded bg-header lg:flex-row lg:justify-around lg:items-center">
		<p class="text-xl">
			Trabajemos juntos en
			<span class="text-primary">proyectos increíbles</span>
		</p>

		<base-button-link class="mt-4 lg:mt-0" href="contact-me">
			{{ $t('nav_links.contact_me') }}
		</base-button-link>
	</section>
</template>

<script>
export default {
	name: 'TheWorkTogetherButton',
	data() {
		return {};
	},
};
</script>
