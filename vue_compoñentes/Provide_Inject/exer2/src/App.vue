<template>
	<div class="container">

		<input type="text" id="name" v-model="texto_filtro"  placeholder="Filtrar por apelido">

		<select v-model="personaSeleccionada" @change="seleccionar" size="20" id="" style="width: 200px;">
			<option :value="dato" v-for="dato in datosFiltrados">{{ dato.apellido }}, {{ dato.nombre }}</option>
		</select>

		<label for="nome">Nome</label>
		<input type="text" id="nome" placeholder="Nome" v-model="campoNome" >

		<label for="apelido">Apelido</label>
		<input type="text" id="nome" placeholder="Apelido"  v-model="campoApelido" > 

		<button @click="añadir">Añadir</button>
		<button @click="actualizar">Actualizar</button>
		<button @click="borrar" >Borrar</button>

	</div>
</template>

<style>
.container {
    margin: 0 auto;         /* Centrado horizontal básico */
    max-width: 400px;       /* Le damos un ancho máximo para que no se estire */
    padding: 20px;

    display: flex;
    flex-direction: column; /* Pone los elementos uno debajo de otro */
    align-items: center;    /* Centra los hijos horizontalmente dentro del div */
    gap: 15px;              /* Separa el input, el select y los botones automáticamente */
}
</style>

<script>

export default {
	data() {
		return {
			texto_filtro: "",
			datos: [{
				id: 1,
				nombre: 'David',
				apellido: 'Otero'
			}, {
				id: 2,
				nombre: 'Margarita',
				apellido: 'Souto'
			}, {
				id: 3,
				nombre: 'Pedro',
				apellido: 'Otero'
			}
			],
			campoNome: "",
			campoApelido: "",
			personaSeleccionada: {}

		};
	},methods:{
		seleccionar(){
			this.campoNome = this.personaSeleccionada.nombre
			this.campoApelido= this.personaSeleccionada.apellido
			
		},
		añadir(){
			if (this.campoNome && this.campoApelido){

				// Creo un novo obxeto
				let dato = {}
				dato.id = Date.now
				dato.nombre = this.campoNome
				dato.apellido = this.campoApelido

				// Metoo no array
				this.datos.push(dato)
				// Limpo os campos
				this.campoNome = ""
				this.campoApelido = ""
			}

		}, 
		borrar(){
			this.datos = this.datos.filter((x) => x.id != this.personaSeleccionada.id)
			this.personaSeleccionada = {}
			this.campoNome = ""
			this.campoApelido = ""
		},
		actualizar(){
			this.personaSeleccionada.nombre = this.campoNome
			this.personaSeleccionada.apellido = this.campoApelido

			this.campoNome = ""
			this.campoApelido = ""

		}



	} ,computed: {
		datosFiltrados() { 
					return this.datos.filter((persona) => persona.apellido.toLowerCase().includes(this.texto_filtro.toLowerCase()));
				}
		}

};
</script>
