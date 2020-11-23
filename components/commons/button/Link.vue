<template>
	<nuxt-link :to="localePath({ name: href })" tag="a" class="text-sm font-semibold tracking-wider text-center uppercase text-primary">
		<slot></slot>
	</nuxt-link>
</template>

<script>
export default {
	name: 'Link',
	props: ['href', 'disabled'],
}
</script>
