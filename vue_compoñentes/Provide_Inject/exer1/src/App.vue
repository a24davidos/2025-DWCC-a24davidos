<template>

	<div v-for="tab in tabs" :key="tab">
		<label>
			<input type="radio" :value="tab" v-model="currentTab" />
			{{ tab }}
		</label>
	</div>

	<component 
	:is="currentTab" 
	:datos="datos"
	@delete="deletecard"
	@add="engadir"
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

export default {
	data() {
		return {
			currentTab: 'ListaTarxetas',
			tabs: ['ListaTarxetas', 'Formulario'],
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
	}, methods: {
		deletecard(titulo) {
			this.datos = this.datos.filter((x) => x.titulo != titulo)
		},
		engadir(tituloD, descD,ligazonD){
			let data = {
				titulo: tituloD,
				desc: descD,
				ligazon: ligazonD
			}

			this.datos.push(data)
			this.currentTab = 'ListaTarxetas'
		}
	}
};
</script>
