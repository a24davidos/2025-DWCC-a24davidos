<template>
	<Tarxeta
		:class="'borde'"
		v-for="(dato, index) in datos"
		:key="index"
		:titulo="dato.titulo"
		:desc="dato.desc"
		:ligazon="dato.ligazon"
	/>
</template>

<style>
.borde {
	border: 1px solid black;
	width: 400px;
	text-align: center;
	padding: 10px;
	margin: 10px;
}
</style>

<script>
import Tarxeta from './components/Tarxeta.vue';

export default {
	data() {
		return {
			datos: [
				{
					titulo: 'Prueba1',
					desc: 'Descripcion da prueba 1',
					ligazon: 'www.prueba1.com',
				},
				{
					titulo: 'Prueba2',
					desc: 'Descripcion da prueba 2',
					ligazon: 'www.prueba2.com',
				},
			],
		};
	},
};
</script>
