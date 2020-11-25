<template>
	<nuxt-link :to="localePath({ name: href })" tag="li">
		<a class="block hover:text-gray-100">
			<slot></slot>
		</a>
	</nuxt-link>
</template>

<script>
export default {
	name: 'Navlink',
	props: ['href']
};
</script>
