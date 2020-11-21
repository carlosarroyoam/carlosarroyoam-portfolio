<template>
	<nuxt-link :to="localePath({ name: href })" tag="a" class="inline-flex items-center flex-grow-0 px-4 py-2 mt-6 text-sm font-semibold tracking-wider text-center text-gray-100 uppercase rounded bg-primary">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	name: 'Button',
	props: ['href', 'type', 'isLink', 'disabled'],
};
</script>
