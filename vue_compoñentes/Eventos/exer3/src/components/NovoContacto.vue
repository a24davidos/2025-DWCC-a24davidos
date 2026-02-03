<template>
	<div>
		<h3>Engadir novo contacto</h3>

		<input type="text" placeholder="Nome" v-model="nome" />

		<input type="text" placeholder="telefono" v-model="telefono" />

		<input type="text" placeholder="correo" v-model="correo" />

		<button @click="engadirContacto">Engadir</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nome: '',
			telefono: '',
			correo: '',
			favorito: false,
		};
	},
	methods: {
		engadirContacto() {
			const novoContacto = {
				nome: this.nome,
				telefono: this.telefono,
				correo: this.correo,
				favorito: false,
			};

			this.$emit('novoContacto', novoContacto);

			this.nome = '';
			this.telefono = '';
			this.correo = '';
		},
	},
};
</script>

<style lang="scss" scoped></style>
