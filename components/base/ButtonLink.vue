<template>
	<nuxt-link :to="localePath({ name: href })" tag="a" class="block px-12 py-2 text-base text-center text-gray-100 uppercase rounded bg-primary">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	name: 'button-link',
	props: ['href'],
	data() {
		return {};
	},
};
</script>
