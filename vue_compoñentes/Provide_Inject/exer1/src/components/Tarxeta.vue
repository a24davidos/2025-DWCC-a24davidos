<template>
	<div>
		<h3>Titulo: {{ titulo }}</h3>
		<p>Descripcion: {{ desc }}</p>
		<!-- Los atributos tienen que ser pasado por bindin, no vale usar  {{  }} -->
		<a :href="ligazon">{{ ligazon }}</a>
		<br>
		<br>
		<button @click="$emit('delete', titulo)">Delete</button>
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

<style scoped></style>
