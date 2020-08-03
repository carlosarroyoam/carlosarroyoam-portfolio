<template>
	<div>
		<img :src="author.image" />
		<div>
			<p>{{ author.name }}</p>
			<p>{{ author.bio }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Author',
	props: {
		author: {
			type: Object,
			required: true,
		},
	},
};
</script>