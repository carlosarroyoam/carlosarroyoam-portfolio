<template>
	<a class="text-primary" :href="href" :target="target"><slot></slot></a>
</template>

<script>
export default {
	name: 'hyperlink',
	props: ['href', 'target'],
	data() {
		return {};
	},
};
</script>
