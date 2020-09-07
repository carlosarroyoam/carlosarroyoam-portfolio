<template>
	<a class=""><slot></slot></a>
</template>

<script>
export default {
	name: 'link',
	props: ['content'],
	data() {
		return {};
	},
};
</script>
