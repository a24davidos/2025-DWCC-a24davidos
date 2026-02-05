<template>
	<div>
		<h3>Titulo: {{ titulo }}</h3>
		<p>Descripcion: {{ desc }}</p>
		<a href="#">{{ ligazon }}</a>
	</div>
</template>

<script>
export default {
	props: ['titulo', 'desc', 'ligazon'],
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
