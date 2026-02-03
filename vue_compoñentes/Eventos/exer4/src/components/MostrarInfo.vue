<template>
	<div>
		<p>Nome: {{ nome }}</p>
		<p>Nacemento: {{ nacemento }}</p>
	</div>
</template>

<script>
export default {
	props: {
		nome: String,
		nacemento: String,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
